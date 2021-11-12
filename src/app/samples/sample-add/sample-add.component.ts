import { Component } from '@angular/core';
import * as data from './sample-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { SampleService } from '../../_services/api/sample.service';

@Component({
  selector: 'app-sample-add',
  templateUrl: './sample-add.component.html',
  styleUrls: ['./sample-add.component.scss'],
})
export class SampleAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_SAMPLE_ADD;
  formId = 'sampleAdd';

  constructor(public sampleService: SampleService) {}
}
