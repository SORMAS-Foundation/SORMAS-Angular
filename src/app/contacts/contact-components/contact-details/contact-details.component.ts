import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { ContactDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './contact-details-form-data';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CONTACT_DETAILS;
  subscription: Subscription = new Subscription();
  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
  ) {}

  updateComponent(contactItem: ContactDto, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      contactItem,
      this.formData
    );
  }
}
