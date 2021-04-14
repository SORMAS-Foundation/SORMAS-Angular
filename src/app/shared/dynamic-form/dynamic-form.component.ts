/* eslint-disable no-console */
import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { FormBase, FormElementBase } from './types/form-element-base';
import { NotificationService } from '../../_services/notification.service';
import { BaseService } from '../../_services/api/base.service';
import { Resource } from '../../_models/resource';
import { FormActionsService } from '../../_services/form-actions.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormElementControlService],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() formElements: FormBase<string>[] = [];
  @Input() resourceService: BaseService<any>;
  @Input() withAnchor = false;

  formElementsProcessed: FormElementBase<string>[] = [];
  form: FormGroup;
  watchFields: any[] = [];
  subscription: Subscription[] = [];
  fixedHeader = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (this.withAnchor) {
      this.fixedHeader = window.pageYOffset > 71;
    }
  }

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

    this.subscription.push(
      this.formActionsService.getSave().subscribe((response: any) => {
        if (this.form.invalid) {
          this.notificationService.error('Please fill in all the mandatory fields');
          return;
        }

        this.resourceService.update(this.updateResource(response.resource)).subscribe({
          next: () => {},
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => this.notificationService.success('Successfully saved'),
        });
      })
    );

    this.subscription.push(
      this.formActionsService.getDiscard().subscribe(() => {
        this.processFormArray().forEach((item) => {
          this.form.controls[item.key].setValue(item.value);
        });
      })
    );

    this.detectChanges();

    // trigger 'valueChanges' on each form control to update their dependent fields
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setValue(control.value);
    });
  }

  updateResource(resource: any): Resource {
    Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
      if (key.includes('.')) {
        const setToValue = (obj: any, prop: any) => {
          let i;
          // eslint-disable-next-line no-param-reassign
          prop = prop.split('.');
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

  processFormArray(): FormElementBase<string>[] {
    let arrayTmp: FormElementBase<string>[] = [];

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
          targetField.active =
            watchField?.active && (item.values ? item.values.includes(val) : !!val);
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

  getTargetField(target: string): FormElementBase<string> | undefined {
    let result: FormElementBase<string> | undefined;
    this.formElements.some((group) => {
      result = group.fields.find((field) => field.key === target);
      return result;
    });
    return result;
  }

  getSections(): any {
    return this.formElements
      .filter((item) => item.anchor)
      .map((item: FormBase<string>) => ({ id: item.anchor, label: item.anchorLabel }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
