import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-hospitalization-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';

@Component({
  selector: 'app-case-hospitalization',
  templateUrl: './case-hospitalization.component.html',
  styleUrls: ['./case-hospitalization.component.scss'],
})
export class CaseHospitalizationComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_HOSPITALIZATION;

  public resourceService: BaseService<any>;

  constructor(private formElementControlService: FormElementControlService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
