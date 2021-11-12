import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './case-edit-form-data';
import { CaseService } from '../../_services/api/case.service';

@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss'],
})
export class CaseEditComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_CASE_EDIT;
  formId = 'caseEdit';

  constructor(public caseService: CaseService) {}
}
