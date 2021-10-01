import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';
import { FormBase } from '../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_USER_FILTERS } from './user-filters/user-filters-form-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_USER_FILTERS));
  headerHeight = HEADER_HEIGHT;
}
