import { Component } from '@angular/core';
import { CONFIGURATION_REGION_FILTERS_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_REGION_FILTERS } from './region-filters/region-filters-form-data';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_REGION_FILTERS));
  formId = CONFIGURATION_REGION_FILTERS_FORM_ID;
}
