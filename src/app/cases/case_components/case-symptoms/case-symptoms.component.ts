import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-symptoms-form-data';

@Component({
  selector: 'app-case-symptoms',
  templateUrl: './case-symptoms.component.html',
  styleUrls: ['./case-symptoms.component.scss'],
})
export class CaseSymptomsComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_SYMPTOMS;

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
