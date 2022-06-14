import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-hospitalization-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { CASE_HOSPITALIZATION_FORM_ID } from '../../../app.constants';
import { CaseService } from '../../../_services/api/case.service';
import { SampleService } from '../../../_services/api/sample.service';
import { PreviousHospitalizationDto } from '../../../_models/previousHospitalizationDto';

@Component({
  selector: 'app-case-hospitalization',
  templateUrl: './case-hospitalization.component.html',
  styleUrls: ['./case-hospitalization.component.scss'],
})
export class CaseHospitalizationComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_HOSPITALIZATION;
  formId = CASE_HOSPITALIZATION_FORM_ID;
  case: CaseDataDto;
  prevHospitalization: PreviousHospitalizationDto[];

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public caseService: CaseService,
    public sampleService: SampleService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.case = caseItem;
    this.prevHospitalization = this.case.hospitalization?.previousHospitalizations || [];
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
