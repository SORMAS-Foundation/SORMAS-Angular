import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { FormBase, FormElementBase } from './types/form-element-base';
import { TriggerSaveFormService } from '../../_services/trigger-save-form.service';
import { NotificationService } from '../../_services/notification.service';
import { BaseService } from '../../_services/api/base.service';
import { Resource } from '../../_models/resource';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormElementControlService],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() formElements: FormBase<string>[] = [];
  @Input() resourceService: BaseService<any>;
  formElementsProcessed: FormElementBase<string>[] = [];
  form: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private formElementControlService: FormElementControlService,
    form: FormBuilder,
    private triggerSaveFormService: TriggerSaveFormService,
    private notificationService: NotificationService
  ) {
    this.form = form.group({
      title: form.control('initial value', Validators.required),
    });
  }

  ngOnInit(): void {
    this.form = this.formElementControlService.toFormGroup(this.processFormArray());

    this.subscription = this.triggerSaveFormService.getSave().subscribe((response: any) => {
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
    });
  }

  updateResource(resource: any): Resource {
    Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
      // eslint-disable-next-line no-param-reassign
      resource[key] = value;
    });

    return resource;
  }

  processFormArray(): FormElementBase<string>[] {
    let arrayTmp: FormElementBase<string>[] = [];

    this.formElements.forEach((formElement) => {
      arrayTmp = arrayTmp.concat(formElement.fields);
    });

    return arrayTmp;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
