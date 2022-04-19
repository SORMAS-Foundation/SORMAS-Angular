import { Component } from '@angular/core';
import {
  ACTIONS_CASE_FOLLOW_UP,
  API_ROUTE_CASES_FOLLOW_UP,
  EXPORT_TYPES,
  TableAppearanceOptions,
} from '../../../app.constants';
import { Filter, NavItem, TableColumn } from '../../../_models/common';
import { CaseDataDto, VisitDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { VisitService } from '../../../_services/api/visit.service';
import { defaultColumnDefs } from './case-follow-up-table-data';
import { actionsMoreDefs } from './case-follow-up-actions-data';
import { ExportService } from '../../../_services/api/export.service';

@Component({
  selector: 'app-case-follow-up',
  templateUrl: './case-follow-up.component.html',
  styleUrls: ['./case-follow-up.component.scss'],
})
export class CaseFollowUpComponent {
  visits: VisitDto[] = [];
  defaultColumns: TableColumn[] = defaultColumnDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  preSetFilters: Filter[];
  actionsMore: NavItem[] = actionsMoreDefs;

  public resourceService: BaseService<any>;

  constructor(public visitService: VisitService, private exportService: ExportService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: caseItem.uuid,
      },
    ];
    this.resourceService = resourceService;
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_CASE_FOLLOW_UP.BASIC_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CASES_FOLLOW_UP.EXPORT);
        break;
      default:
        break;
    }
  }
}
