import { Component } from '@angular/core';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { VisitService } from '../../../_services/api/visit.service';
import * as data from './case-follow-up-add-visit-data';

@Component({
  selector: 'app-case-follow-up-add-visit',
  templateUrl: './case-follow-up-add-visit.component.html',
  styleUrls: ['./case-follow-up-add-visit.component.scss'],
})
export class CaseFollowUpAddVisitComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS;
  formId = ADD_EDIT_FORM_ID;

  constructor(public visitService: VisitService) {}
}
