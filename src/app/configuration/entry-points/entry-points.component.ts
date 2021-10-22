import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_ENTRY_POINT_FILTERS } from './entry-points-filters/entry-points-filters-form-data';

@Component({
  selector: 'app-entry-points',
  templateUrl: './entry-points.component.html',
  styleUrls: ['./entry-points.component.scss'],
})
export class EntryPointsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_ENTRY_POINT_FILTERS));
}
