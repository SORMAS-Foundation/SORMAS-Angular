import { Component } from '@angular/core';
import * as data from './sample-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { SampleService } from '../../_services/api/sample.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-sample-add',
  templateUrl: './sample-add.component.html',
  styleUrls: ['./sample-add.component.scss'],
})
export class SampleAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_SAMPLE_ADD;
  formId = ADD_EDIT_FORM_ID;

  constructor(public sampleService: SampleService) {}
}
