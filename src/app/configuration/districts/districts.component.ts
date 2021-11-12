import { Component } from '@angular/core';
import { CONFIGURATION_DISTRICT_FILTERS_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_DISTRICT_FILTERS } from './district-filters/district-filters-form-data';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
})
export class DistrictsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_DISTRICT_FILTERS));
  formId = CONFIGURATION_DISTRICT_FILTERS_FORM_ID;
}
