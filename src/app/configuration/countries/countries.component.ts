import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CONFIGURATION_COUNTRY_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { FORM_DATA_COUNTRY_FILTERS } from './country-filters/country-filters-form-data';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_COUNTRY_FILTERS));
  formId = CONFIGURATION_COUNTRY_FILTERS_FORM_ID;
}
