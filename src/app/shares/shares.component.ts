import { Component } from '@angular/core';
import { HEADER_HEIGHT, SHARE_REQUEST_FILTERS_FORM_ID } from '../app.constants';
import { FormBase } from '../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_SHARES_FILTERS } from './shares-filters/shares-filters-form-data';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.scss'],
})
export class SharesComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_SHARES_FILTERS));
  formId = SHARE_REQUEST_FILTERS_FORM_ID;
  headerHeight = HEADER_HEIGHT;
}
