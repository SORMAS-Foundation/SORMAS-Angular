import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { ContactDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './contact-details-form-data';
import { TaskService } from '../../../_services/api/task.service';
import { SampleService } from '../../../_services/api/sample.service';
import { EventService } from '../../../_services/api/event.service';

const contactRisks = [
  { category: 'HIGH_RISK', values: ['TOUCHED_FLUID', 'FACE_TO_FACE_LONG', 'AEROSOL'] },
  { category: 'HIGH_RISK_MED', values: ['MEDICAL_UNSAFE'] },
  { category: 'MEDIUM_RISK_MED', values: ['MEDICAL_LIMITED'] },
  { category: 'LOW_RISK', values: ['SAME_ROOM', 'FACE_TO_FACE_SHORT', 'MEDICAL_SAME_ROOM'] },
  {
    category: 'NO_RISK',
    values: [
      'MEDICAL_SAFE',
      'MEDICAL_DISTANT',
      'PHYSICAL_CONTACT',
      'CLOTHES_OR_OTHER',
      'CLOSE_CONTACT',
      'AIRPLANE',
    ],
  },
];

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CONTACT_DETAILS;
  subscription: Subscription = new Subscription();
  contact: ContactDto;
  selectedContactType = '';
  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public taskService: TaskService,
    public sampleService: SampleService,
    public eventService: EventService
  ) {}

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

    this.contact = contactItem;
  }

  setRiskByContactType(contactType: string): void {
    contactRisks.forEach((cr) => {
      if (cr.values.includes(contactType)) {
        this.myFormElements = this.formElementControlService.setAttributeToFormElement(
          this.myFormElements,
          'contactCategory',
          'value',
          cr.category
        );
        console.log('ok', cr.category, this.myFormElements);
      }
    });
  }

  onFormChange(event: any): void {
    if (this.selectedContactType !== event.contactType) {
      this.selectedContactType = event.contactType;
      this.setRiskByContactType(this.selectedContactType);
    }
  }
}
