import { Component } from '@angular/core';
import { NavItem, TableColumn } from '../../../_models/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { FacilityService } from '../../../_services/api/facility.service';
import { FacilityDto } from '../../../_models/facilityDto';
import { defaultColumnDefs } from './facilities-table-data';
import { actionsBulkEditDefs } from './facilities-actions-data';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss'],
})
export class FacilityListComponent {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(public facilityService: FacilityService) {}

  openEditFacilityModal(facility: FacilityDto): void {
    // eslint-disable-next-line no-console
    console.log(facility);
  }

  openAddFacilityModal(): void {
    // eslint-disable-next-line no-console
    console.log('add');
  }
}
