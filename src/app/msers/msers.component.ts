import { Component } from '@angular/core';
import { HEADER_HEIGHT, TASK_FILTERS_FORM_ID } from '../app.constants';
import { FormBase } from '../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_MSERS_FILTERS } from './msers-filters/msers-filters-form-data';

@Component({
  selector: 'app-msers',
  templateUrl: './msers.component.html',
  styleUrls: ['./msers.component.scss'],
})
export class MsersComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_MSERS_FILTERS));
  formId = TASK_FILTERS_FORM_ID;
  headerHeight = HEADER_HEIGHT;
}
