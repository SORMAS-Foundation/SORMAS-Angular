import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { DistrictService } from '../../../_services/api/district.service';
import { actionsBulkEditDefs } from './districts-actions-data';
import { defaultColumnDefs } from './districts-table-data';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss'],
})
export class DistrictListComponent {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(public districtService: DistrictService) {}
}
