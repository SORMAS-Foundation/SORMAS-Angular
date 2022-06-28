import { Component } from '@angular/core';
import { DOCUMENT_TEMPLATE_CREATE_FORM_ID } from '../../app.constants';
import { FORM_DATA_DOCUMENT_TEMPLATE_CREATE } from './document-template-create-form-data';

@Component({
  selector: 'app-document-template-create',
  templateUrl: './document-template-create.component.html',
  styleUrls: ['./document-template-create.component.scss'],
})
export class DocumentTemplateCreateComponent {
  formData = JSON.parse(JSON.stringify(FORM_DATA_DOCUMENT_TEMPLATE_CREATE));
  formId = DOCUMENT_TEMPLATE_CREATE_FORM_ID;

  create(): void {}
}
