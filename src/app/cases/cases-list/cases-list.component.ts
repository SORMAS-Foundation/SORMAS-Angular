import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CaseService } from '../../_services/api/case.service';
import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { TableColumn } from '../../shared/table/table-column';
import { defaultColumnDefs } from '../../_entity-data/case';
import { CaseDataDto } from '../../_models/caseDataDto';

import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  selectCase(selection: SelectionModel<any>): void {
    console.log('event', selection);
  }

  clickCase(event: any): void {
    this.router.navigate([`/cases/case/${event.item.uuid}/details`]);
  }

  filter(): void {
    this.filterService.setFilters([
      {
        field: 'filter',
        value: '11111',
      },
      {
        field: 'filter222',
        value: '22222',
      },
    ]);
  }
}
