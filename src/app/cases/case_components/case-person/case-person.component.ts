import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';

@Component({
  selector: 'app-case-person',
  templateUrl: './case-person.component.html',
  styleUrls: ['./case-person.component.scss'],
})
export class CasePersonComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_PERSON_DETAILS;

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
