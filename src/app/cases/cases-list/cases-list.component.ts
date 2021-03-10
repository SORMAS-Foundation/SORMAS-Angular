import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import {
  VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT,
  VIRTUAL_SCROLL_PAGE_SIZE,
} from 'src/app/app.constants';
import { ApiError } from '../../shared/http/BaseDataService';
import { TableColumn } from '../../shared/table/table-column';
import { defaultColumnDefs } from './columns-default';
import { CaseService } from '../../_services/api/case.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseDataDto[] = [];
  pageSize = VIRTUAL_SCROLL_PAGE_SIZE;
  visibleRowsCount = VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT;
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();
  casesColumnDefs: TableColumn[] = defaultColumnDefs;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getAllCases({ page: 0, size: 2 }).subscribe({
      next: (response: any) => {
        this.cases = response.elements;
      },
      error: (err: any) => {
        console.log('errrrrrr', err);
      },
      complete: () => {},
    });
  }

  sortData(sortParameters: Sort): void {
    // eslint-disable-next-line no-console
    console.log(sortParameters);
  }

  selectionData(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log(selection);
  }

  fetchMoreData(index: number): void {
    console.log('index', index);
  }
}
