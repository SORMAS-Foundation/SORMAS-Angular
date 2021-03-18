import { Component, EventEmitter, Output } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseItem } from '../../../_models/case';
import * as data from './form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
})
export class CaseDetailsComponent {
  @Output() searchItem: EventEmitter<any> = new EventEmitter();
  myFormElements: FormBase<any>[] = [];

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
  ) {
  }

  anyFunction(caseItem: CaseItem, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(caseItem, data.FORM_DATA_CASE_DETAILS);
  }
}
