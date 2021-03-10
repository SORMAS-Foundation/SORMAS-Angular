import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import {
  VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT,
  VIRTUAL_SCROLL_PAGE_SIZE,
} from 'src/app/app.constants';
import { CaseService } from '../services/case.service';
import { PaginatedDataService } from '../services/paginated-data.service';
import { ApiError } from '../shared/http/BaseDataService';
import { TableColumn } from '../shared/table/table-column';
import { defaultColumnDefs } from './columns-default';

@Component({
  selector: 'app-cases-overview',
  templateUrl: './cases-overview.component.html',
  styleUrls: ['./cases-overview.component.scss'],
})
export class CasesOverviewComponent implements OnDestroy, OnInit {
  cases: CaseDataDto[] = [];
  pageSize = VIRTUAL_SCROLL_PAGE_SIZE;
  visibleRowsCount = VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT;
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();
  casesColumnDefs: TableColumn[] = defaultColumnDefs;

  isLoading = false;

  sortParameters: Sort = { active: 'caseClassification', direction: 'asc' };
  currentSort = {
    propertyName: this.sortParameters.active,
    ascending: this.sortParameters.direction === 'asc',
  };

  constructor(
    private caseService: CaseService,
    private paginatedDataService: PaginatedDataService<CaseDataDto>
  ) {}

  fetcher = (page: number) =>
    this.caseService.getPaginatedCases(page, this.pageSize, {
      caseCriteria: null,
      sortProperties: [this.currentSort],
    });

  async ngOnInit(): Promise<void> {
    this.cases = await this.paginatedDataService.init(this.fetcher);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async sortData(sortParameters: Sort): Promise<void> {
    // eslint-disable-next-line no-console
    this.currentSort = {
      propertyName: sortParameters.active,
      ascending: sortParameters.direction === 'asc',
    };
    this.paginatedDataService.setSortDirection(sortParameters.direction);
    this.paginatedDataService.clearCachedPages();
    this.cases = await this.paginatedDataService.init(this.fetcher);

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
