import { Component } from '@angular/core';
import { FORM_DATA_CLINICAL_COURSE_ADD } from './clinical-course-add-form-data';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { ClinicalVisitService } from '../../../_services/api/clinical-visit.service';

@Component({
  selector: 'app-clinical-course-add',
  templateUrl: './clinical-course-add.component.html',
  styleUrls: ['./clinical-course-add.component.scss'],
})
export class ClinicalCourseAddComponent {
  myFormElements: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CLINICAL_COURSE_ADD));
  formId = ADD_EDIT_FORM_ID;

  constructor(public clinicalVisitService: ClinicalVisitService) {}
}
