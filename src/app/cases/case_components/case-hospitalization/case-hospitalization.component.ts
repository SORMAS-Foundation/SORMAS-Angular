import { Component } from '@angular/core';
import {FormBase} from '../../../shared/dynamic-form/types/form-element-base';
import {BaseService} from '../../../_services/api/base.service';
import {FormElementControlService} from '../../../_services/form-element-control.service';
import {CaseItem} from '../../../_models/case';
import * as data from './form-data';

@Component({
  selector: 'app-case-hospitalization',
  templateUrl: './case-hospitalization.component.html',
  styleUrls: ['./case-hospitalization.component.scss'],
})
export class CaseHospitalizationComponent {
  myFormElements: FormBase<any>[] = [];

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
  ) {
  }

  updateComponent(caseItem: CaseItem, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(caseItem, data.FORM_DATA_CASE_HOSPITALIZATION);
  }
}
