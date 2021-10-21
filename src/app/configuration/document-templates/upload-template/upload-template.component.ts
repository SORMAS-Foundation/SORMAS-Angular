import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentWorkflowType } from '../../../_models/documentWorkflowType';

@Component({
  selector: 'app-upload-template',
  templateUrl: './upload-template.component.html',
  styleUrls: ['./upload-template.component.scss'],
})
export class UploadTemplateComponent {
  documentWorkflow = DocumentWorkflowType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
