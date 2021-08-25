import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { CountryDto } from '../../../_models/models';
import { RegionService } from '../../../_services/api/region.service';
import { actionsBulkEditDefs } from './regions-actions-data';
import { defaultColumnDefs } from './regions-table-data';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss'],
})
export class RegionListComponent {
  cases: CountryDto[] = [];
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(public regionService: RegionService) {}
}
