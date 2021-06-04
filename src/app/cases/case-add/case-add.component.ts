import { Component, OnInit } from '@angular/core';
import * as data from './case-hospitalization-form-data';
import { CaseService } from '../../_services/api/case.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../_services/form-element-control.service';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.scss']
})
export class CaseAddComponent implements OnInit {

  formData = data.FORM_DATA_CASE_HOSPITALIZATION;
  myFormElements: FormBase<any>[] = [];

  constructor(public caseService: CaseService, private formElementControlService: FormElementControlService) { }

  ngOnInit(): void {
    console.log('cccccc');
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      {},
      this.formData
    );
  }

}
