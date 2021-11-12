import { Component } from '@angular/core';
import * as data from './contact-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ContactService } from '../../_services/api/contact.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
})
export class ContactAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_CONTACT_ADD;
  formId = ADD_EDIT_FORM_ID;

  constructor(public contactService: ContactService) {}
}
