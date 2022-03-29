import { Component } from '@angular/core';
import { CASE_EXPORT_CONFIGURATION_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CaseService } from '../../_services/api/case.service';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';

@Component({
  selector: 'app-export-configuration',
  templateUrl: './export-configuration.component.html',
  styleUrls: ['./export-configuration.component.scss'],
})
export class ExportConfigurationComponent {
  public formData: FormBase<any>[] = FORM_DATA_EXPORT_CONFIGURATION;
  formId = CASE_EXPORT_CONFIGURATION_FORM_ID;

  constructor(public caseService: CaseService) {}
}
