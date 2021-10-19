import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_SUBCONTINENT_FILTERS } from './subcontinent-filters/subcontinent-filters-form-data';

@Component({
  selector: 'app-subcontinents',
  templateUrl: './subcontinents.component.html',
  styleUrls: ['./subcontinents.component.scss'],
})
export class SubcontinentsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_SUBCONTINENT_FILTERS));
}
