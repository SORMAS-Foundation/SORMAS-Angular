import { Component } from '@angular/core';
import * as data from './case-add-form-data';
import { CaseService } from '../../_services/api/case.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.scss'],
})
export class CaseAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_CASE_ADD;

  constructor(public caseService: CaseService) {}
}
