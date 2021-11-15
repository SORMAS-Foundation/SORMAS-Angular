import { Component, Input, OnInit } from '@angular/core';
import * as data from './case-add-form-data';
import { CaseService } from '../../_services/api/case.service';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../_models/caseDataDto';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.scss'],
})
export class CaseAddComponent implements OnInit {
  @Input() selectedResource: CaseDataDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public caseService: CaseService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_CASE_ADD))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_CASE_ADD));
    }
  }
}
