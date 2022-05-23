/* eslint-disable no-console */
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
  @Input() outsourceSubmit = false;

  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  formElementsProcessed: FormElementBase<any>[] = [];
  form: FormGroup;
  watchFields: any[] = [];
  subscription: Subscription[] = [];
  sections: any[] = [];
  formGroupStyleType = FormGroupStyleType;

  constructor(
    private formElementControlService: FormElementControlService,
    private formActionsService: FormActionsService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const $formSave = this.formActionsService.getSave();
    const $formReset = this.formActionsService.getDiscard();
    const $fieldUpdate = this.formActionsService.getInputValue();
    const $fieldChanged = this.formActionsService.getInputChange();

    this.subscription.push(
      $formSave
        .pipe(filter(({ formId }) => this.formId === formId))
        .pipe(filter(() => this.validateForm()))
        .subscribe((response) => this.submitForm(response))
    );

    this.subscription.push(
      $formReset.pipe(filter(({ formId }) => this.formId === formId)).subscribe(() => {
        this.processFormArray().forEach((item) => {
          this.form.controls[item.key].setValue(item.value);
        });
      })
    );

    this.subscription.push(
      $fieldUpdate
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe((response: any) => {
          this.form.controls[response.key].setValue(response.value);
        })
    );

    this.subscription.push(
      $fieldChanged
        .pipe(throttleTime(300))
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe(() => {
          if (this.form?.value) {
            this.changed.emit(this.form.value);
          }
        })
    );

    this.form = this.formElementControlService.toFormGroup(this.processFormArray());
    this.sections = this.getSections();
    this.detectChanges();

    // trigger 'valueChanges' on each form control to update their dependent fields
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setValue(control.value);
    });
  }

  changeFormElementAttribute(key: string, attribute: string, value: any): void {
    const target = this.getTargetField(key.replace(/\./g, '__'));
    if (target) {
      // @ts-ignore
      target[attribute] = value;
    }
  }

  validateForm(): boolean {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notificationService.error(
        this.translateService.instant('strings.errorFieldValidationFailed')
      );
    }
    return this.form.valid;
  }

  submitForm(response: any): void {
    const data = this.updateFormRawValueWithObjects(response?.resource?.uuid);

    if (this.outsourceSubmit) {
      this.formSubmit.emit([data, this.resourceService]);
      return;
    }

    const $service = this.resourceService.add(!response.multiple ? data : [data]);
    this.subscription.push(
      $service.subscribe({
        next: (requestResponse: any) => {
          this.formActionsService.setCloseFormModal(this.formId, true, requestResponse);
          this.notificationService.success(
            this.translateService.instant(
              response.resource === null
                ? 'strings.addedSuccessfully'
                : 'strings.editedSuccessfully'
            )
          );
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  convertDotPathToNestedObject(path: string, value: any): any {
    const [last, ...paths] = path.split('__').reverse();
    // @ts-ignore
    return paths.reduce((acc, el) => ({ [el]: acc }), { [last]: value });
  }

  updateFormRawValueWithObjects(uuid?: string): any {
    let rawValueTmp: any = {};

    if (uuid) {
      rawValueTmp = {
        uuid,
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
        watch: item.dependingOn?.replace(/\./g, '__'),
        target: item.key.replace(/\./g, '__'),
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
