import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { ContactDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './contact-details-form-data';
import { TaskService } from '../../../_services/api/task.service';
import { SampleService } from '../../../_services/api/sample.service';
import { EventService } from '../../../_services/api/event.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CONTACT_DETAILS;
  subscription: Subscription = new Subscription();
  contact: ContactDto;
  public resourceService: BaseService<any>;

  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(
    private formElementControlService: FormElementControlService,
    public taskService: TaskService,
    public sampleService: SampleService,
    public eventService: EventService
  ) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const controlOverwrite = form.get('overwriteFollowUpUntil');
      const controlFollowUpUntil = form.get('followUpUntil');
      const controlFollowUpStatus = form.get('followUpStatus');

      this.subscriptions.push(
        controlOverwrite.valueChanges.subscribe((val: boolean) => {
          if (val) {
            controlFollowUpUntil.enable();
          } else {
            controlFollowUpUntil.disable();
          }
        })
      );
      this.subscriptions.push(
        controlFollowUpStatus.valueChanges.subscribe((val: string) => {
          if (val === 'FOLLOW_UP') {
            controlOverwrite.enable();
          } else {
            controlOverwrite.setValue(false);
            controlOverwrite.disable();
          }
        })
      );
    }
  }

  updateComponent(contactItem: ContactDto, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      contactItem,
      this.formData
    );

    this.myFormElements = this.formElementControlService.setAttributeToFormElement(
      this.myFormElements,
      'caze',
      'resource',
      contactItem
    );

    this.myFormElements = this.formElementControlService.setAttributeToFormElement(
      this.myFormElements,
      'followUpUntil',
      'disabled',
      !contactItem.overwriteFollowUpUntil
    );

    this.contact = contactItem;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
