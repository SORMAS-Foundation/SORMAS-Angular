import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CaseService } from '../../_services/api/case.service';
import { CaseItem } from '../../_models/case';
import { TableColumn } from '../../shared/table/table-column';
import { defaultColumnDefs } from '../../_entity-data/case';

import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseItem[] = [];
  defaultColumns: TableColumn[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  selectionData(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log(selection);
  }

  onCaseSelect(event: any): void {
    this.router.navigate([`/cases/case/${event.id}/details`]);
  }

  filter(): void {
    this.filterService.setFilters([
      {
        field: 'filter',
        value: '22222',
      },
    ]);
  }
}
