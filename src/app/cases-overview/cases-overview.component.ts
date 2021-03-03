import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import { CaseService } from '../services/case.service';
import { PaginatedDataService } from '../services/paginated-data.service';
import { ApiError } from '../shared/http/BaseDataService';
import { TableColumn } from '../shared/table/table-column';
import { defaultColumnDefs } from './columns-default';

const VISIBLE_ROWS_COUNT = 8;
const PAGE_SIZE = 8;

@Component({
  selector: 'app-cases-overview',
  templateUrl: './cases-overview.component.html',
  styleUrls: ['./cases-overview.component.scss'],
})
export class CasesOverviewComponent implements OnInit, OnDestroy {
  cases: CaseDataDto[] = [];
  pageSize = PAGE_SIZE;
  visibleRowsCount = VISIBLE_ROWS_COUNT;
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();
  casesColumnDefs: TableColumn[] = defaultColumnDefs;

  isLoading = false;

  constructor(
    private caseService: CaseService,
    private paginatedDataService: PaginatedDataService<CaseDataDto>
  ) {}

  fetcher = (page: number) =>
    this.caseService.getPaginatedCases(page, this.pageSize, {
      caseCriteria: null,
      sortProperties: null,
    });

  async ngOnInit(): Promise<void> {
    this.cases = await this.paginatedDataService.init(this.fetcher);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sortData(sortParameters: Sort): void {
    // eslint-disable-next-line no-console
    console.log(sortParameters);
  }

  selectionData(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log(selection);
  }

  async fetchMoreData(index: number): Promise<void> {
    this.cases = await this.paginatedDataService.fetchMoreData(index, this.cases, this.fetcher);
  }
}
