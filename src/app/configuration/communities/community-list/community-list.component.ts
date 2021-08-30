import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { CommunityService } from '../../../_services/api/community.service';
import { actionsBulkEditDefs } from './communities-actions-data';
import { defaultColumnDefs } from './communities-table-data';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(public communityService: CommunityService) {}
}
