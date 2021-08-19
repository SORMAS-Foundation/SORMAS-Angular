import { Component } from '@angular/core';
import { TableAppearanceOptions } from '../../../app.constants';
import { Filter, TableColumn } from '../../../_models/common';
import { CaseDataDto, VisitDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { VisitService } from '../../../_services/api/visit.service';
import { defaultColumnDefs } from './contact-follow-up-table-data';

@Component({
  selector: 'app-contact-follow-up',
  templateUrl: './contact-follow-up.component.html',
  styleUrls: ['./contact-follow-up.component.scss'],
})
export class ContactFollowUpComponent {
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
