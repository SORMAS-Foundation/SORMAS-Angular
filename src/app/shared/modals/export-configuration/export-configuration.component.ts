import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CASE_EXPORT_CONFIGURATION_FORM_ID } from '../../../app.constants';
import { ImportExportService } from '../../../_services/api/import-export.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-export-configuration',
  templateUrl: './export-configuration.component.html',
  styleUrls: ['./export-configuration.component.scss'],
})
export class ExportConfigurationComponent {
  formId = CASE_EXPORT_CONFIGURATION_FORM_ID;
  formData: FormBase<any>[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public exportService: ImportExportService,
    private formElementControlService: FormElementControlService
  ) {
    this.formData = this.formElementControlService.setAttributeToFormElement(
      this.data.exportFormData || [],
      'exportType',
      'value',
      this.data.exportType
    );
  }
}
