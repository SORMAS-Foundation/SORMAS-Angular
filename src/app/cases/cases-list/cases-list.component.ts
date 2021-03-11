import { Component, OnInit } from '@angular/core';
import {
  VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT,
  VIRTUAL_SCROLL_PAGE_SIZE,
} from 'src/app/app.constants';
import { TableColumn } from '../../shared/table/table-column';
import { CaseService } from '../../_services/api/case.service';
import { Router } from '@angular/router';
import { CaseItem, defaultColumnDefs } from '../../_models/case';

import * as constants from '../../app.constants';
import {Sorting} from '../../_models/common';
import {NotificationService} from '../../_services/notification.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseItem[] = [];
  pageSize = VIRTUAL_SCROLL_PAGE_SIZE;
  visibleRowsCount = VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT;
  casesColumnDefs: TableColumn[] = defaultColumnDefs;

  constructor(
    public caseService: CaseService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getAll({ page: 0, size: constants.PAGE_SIZE }).subscribe({
      next: (response: any) => {
        this.cases = response.elements;
      },
      error: (err: any) => {
        console.log('errrrrrr', err);
      },
      complete: () => {},
    });
  }

  modalSuccess(): void {
    this.notificationService.success('Yess');
  }

  modalError(): void {
    this.notificationService.error('Noo');
  }

  modalConfirm(): void {
    this.notificationService.confirm().subscribe(result => {
      if (result) {
        console.log('yyyyyyyyyyyyyyy', result);
      }
    });
  }

  onRowSelect(event: any): void {
    this.router.navigate([`/cases/case/${event.id}/details`]);
  }

  selectionData(selection: any): void {
    this.router.navigate([`/cases/case/${  selection[0].id}/details`]);
  }

  fetchMoreData(index: number): void {
    console.log('index', index);
  }
}
