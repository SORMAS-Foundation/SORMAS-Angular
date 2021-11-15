import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CONFIGURATION_CONTINENT_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { FORM_DATA_CONTINENT_FILTERS } from './continent-filters/continent-filters-form-data';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss'],
})
export class ContinentsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CONTINENT_FILTERS));
  formId = CONFIGURATION_CONTINENT_FILTERS_FORM_ID;
}
