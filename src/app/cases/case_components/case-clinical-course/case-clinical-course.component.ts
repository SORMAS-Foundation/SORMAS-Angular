import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-clinical-course-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';

@Component({
  selector: 'app-case-clinical-course',
  templateUrl: './case-clinical-course.component.html',
  styleUrls: ['./case-clinical-course.component.scss'],
})
export class CaseClinicalCourseComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_CLINICAL_COURSE;

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
