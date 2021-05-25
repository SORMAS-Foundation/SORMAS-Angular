import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-clinical-course-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { TableColumn } from '../../../_models/common';
import { defaultColumnDefs } from './case-clinical-course-table-data';
import { ClinicalVisitDto } from '../../../_models/clinicalVisitDto';
import { ClinicalVisitService } from '../../../_services/api/clinical-visit.service';
import { TableAppearanceOptions } from '../../../app.constants';

@Component({
  selector: 'app-case-clinical-course',
  templateUrl: './case-clinical-course.component.html',
  styleUrls: ['./case-clinical-course.component.scss'],
})
export class CaseClinicalCourseComponent {
  clinicalAssessments: ClinicalVisitDto[] = [];
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_CLINICAL_COURSE;
  defaultColumns: TableColumn[] = defaultColumnDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public clinicalVisitService: ClinicalVisitService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
