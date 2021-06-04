import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CaseService } from '../../_services/api/case.service';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './case-list-table-data';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CONFIG_CASES } from '../../_constants/storage';
import { HEADER_HEIGHT } from '../../app.constants';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  headerHeight = HEADER_HEIGHT;

  constructor(public caseService: CaseService, private router: Router) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  selectCase(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log('event', selection);
  }

  clickCase(event: any): void {
    this.router.navigate([`/cases/case/${event.item.uuid}/details`]);
  }
}
