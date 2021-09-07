import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { CountryDto } from '../../../_models/models';
import { CountryService } from '../../../_services/api/country.service';
import { actionsBulkEditDefs } from './countries-actions-data';
import { defaultColumnDefs } from './countries-table-data';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  cases: CountryDto[] = [];
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(public countryService: CountryService) {}

  editCountry(country: CountryDto): void {
    // eslint-disable-next-line no-console
    console.log('EDIT country => ', country.defaultName);
  }
}
