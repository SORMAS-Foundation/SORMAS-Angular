/* eslint-disable no-console */
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { FormBase, FormElementBase } from './types/form-element-base';
import { NotificationService } from '../../_services/notification.service';
import { BaseService } from '../../_services/api/base.service';
import { Resource } from '../../_models/resource';
import { FormActionsService } from '../../_services/form-actions.service';
import { FormGroupStyleType } from '../../_models/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormElementControlService],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() formElements: FormBase<any>[] = [];
  @Input() resourceService: BaseService<any>;
  @Input() withAnchor = false;
  @Input() formId: string;

  @Output() changed: EventEmitter<any> = new EventEmitter();

  formElementsProcessed: FormElementBase<any>[] = [];
  form: FormGroup;
  watchFields: any[] = [];
  subscription: Subscription[] = [];
  sections: any[] = [];
  formGroupStyleType = FormGroupStyleType;

  constructor(
    private formElementControlService: FormElementControlService,
    form: FormBuilder,
    private formActionsService: FormActionsService,
    private notificationService: NotificationService
  ) {
    this.form = form.group({
      title: form.control('initial value', Validators.required),
    });
  }

  ngOnInit(): void {
    this.form = this.formElementControlService.toFormGroup(this.processFormArray());
    this.sections = this.getSections();

    this.subscription.push(
      this.formActionsService
        .getSave()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe((response: any) => {
          if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService.error('Please fill in all the mandatory fields');
            return;
          }

          let RESOURCE;
          if (response.resource === null) {
            // ADD mode
            if (response.multiple) {
              RESOURCE = this.resourceService.add([this.updateFormRawValueWithObjects()]);
            } else {
              RESOURCE = this.resourceService.add(this.updateFormRawValueWithObjects());
            }
          } else {
            // // EDIT mode
            // const resourceArrayTmp = [];
            // eslint-disable-next-line
            // for (let i = 0; i < response.resource.length; i += 1) {
            //   resourceArrayTmp.push(this.updateResource(response.resource[i]));
            // }
            RESOURCE = this.resourceService.add([
              this.updateFormRawValueWithObjects(true, response.resource.uuid),
            ]);
          }

          RESOURCE.subscribe({
            next: (requestResponse: any) => {
              this.formActionsService.setCloseFormModal(this.formId, true, requestResponse);
              this.notificationService.success('Successfully saved');
            },
            error: (err: any) => {
              this.notificationService.error(err);
            },
            complete: () => {},
          });
        })
    );

    this.subscription.push(
      this.formActionsService
        .getDiscard()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe(() => {
          this.processFormArray().forEach((item) => {
            this.form.controls[item.key].setValue(item.value);
          });
        })
    );

    this.subscription.push(
      this.formActionsService
        .getInputValue()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe((response: any) => {
          this.form.controls[response.key].setValue(response.value);
        })
    );

    this.subscription.push(
      this.formActionsService
        .getInputChange()
        .pipe(throttleTime(300))
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe(() => {
          this.changed.emit(this.form.value);
        })
    );

    this.detectChanges();

    // trigger 'valueChanges' on each form control to update their dependent fields
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setValue(control.value);
    });
  }

  convertDotPathToNestedObject(path: string, value: any): any {
    const [last, ...paths] = path.split('.').reverse();
    // @ts-ignore
    return paths.reduce((acc, el) => ({ [el]: acc }), { [last]: value });
  }

  updateFormRawValueWithObjects(isEdit?: boolean, id?: string): any {
    let rawValueTmp: any = {};
    if (isEdit) {
      rawValueTmp = {
        uuid: id,
      };
    }

    Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
      if (
        value !== undefined &&
        !this.formElementControlService.isFormElementHidden(this.formElements, key)
      ) {
        if (key.includes('__')) {
          const keys = key.split('__');
          const tempObj = this.convertDotPathToNestedObject(key, value)[keys[0]];
          rawValueTmp[keys[0]] = { ...rawValueTmp[keys[0]], ...tempObj };
        } else {
          rawValueTmp[key] = value;
        }
      }
    });

    return rawValueTmp;
  }

  updateResource(resource: any): Resource {
    Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
      if (key.includes('__')) {
        const setToValue = (obj: any, prop: any) => {
          let i;
          // eslint-disable-next-line no-param-reassign
          prop = prop.split('__');
          // eslint-disable-next-line no-plusplus
          for (i = 0; i < prop.length - 1; i++) {
            // eslint-disable-next-line no-param-reassign
            obj = prop[i] && obj[prop[i]];
          }
          // eslint-disable-next-line no-param-reassign
          obj[prop[i]] = value;
        };
        setToValue(resource, key);
      } else {
        // eslint-disable-next-line no-param-reassign
        resource[key] = value;
      }
    });

    return resource;
  }

  processFormArray(): FormElementBase<any>[] {
    let arrayTmp: FormElementBase<any>[] = [];

    this.formElements.forEach((formElement) => {
      arrayTmp = arrayTmp.concat(formElement.fields);
    });

    this.watchFields = arrayTmp
      .filter((item) => item.dependingOn)
      .map((item) => ({
        watch: item.dependingOn,
        target: item.key,
        values: item.dependingOnValues,
      }));

    return arrayTmp;
  }

  detectChanges(): void {
    this.watchFields.forEach((item) => {
      this.form.controls[item.watch]?.valueChanges.subscribe((val) => {
        const targetField = this.getTargetField(item.target);
        const watchField = this.getTargetField(item.watch);

        if (targetField) {
          if (Array.isArray(val)) {
            if (item.values) {
              targetField.active = false;
              val.forEach((v) => {
                if (item.values.includes(v)) {
                  targetField.active = true;
                }
              });
            }
          } else {
            targetField.active =
              watchField?.active && (item.values ? item.values.includes(val) : !!val);
          }

          if (targetField.active && targetField.validation && targetField.validation.length) {
            this.form
              .get(targetField.key)
              ?.setValidators(this.formElementControlService.getValidators(targetField.validation));
          } else {
            this.form.get(targetField.key)?.setValidators(null);
          }

          // set same value on target field just to trigger 'valueChanges'
          // on it so it can properly update any dependent fields
          if (item.watch !== targetField.key) {
            const formElement = this.form.get(targetField.key);
            formElement?.setValue(formElement?.value);
          }
        }
      });
    });
  }

  getTargetField(target: string): FormElementBase<any> | undefined {
    let result: FormElementBase<any> | undefined;
    this.formElements.some((group) => {
      result = group.fields.find((field) => field.key === target);
      return result;
    });
    return result;
  }

  getSections(): any {
    return this.formElements
      .filter((item) => item.anchor)
      .map((item: FormBase<any>) => ({ id: item.anchor, label: item.anchorLabel }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
