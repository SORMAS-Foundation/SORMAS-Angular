import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../app.constants';
import { Filter, TableColumn } from '../../../_models/common';
import { CaseDataDto, VisitDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { VisitService } from '../../../_services/api/visit.service';
import { defaultColumnDefs } from './case-follow-up-table-data';

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

  public resourceService: BaseService<any>;

  constructor(public visitService: VisitService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: caseItem.uuid,
      },
    ];
    this.resourceService = resourceService;
  }
}
