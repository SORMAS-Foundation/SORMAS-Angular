import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import { CaseService } from '../services/case.service';
import { DataFetcherService } from '../services/data-fetcher.service';
import { ApiError } from '../shared/http/BaseDataService';
import { TableColumn } from '../shared/table/table-column';
import { defaultColumnDefs } from './columns-default';

@Component({
  selector: 'app-cases-overview',
  templateUrl: './cases-overview.component.html',
  styleUrls: ['./cases-overview.component.scss'],
})
export class CasesOverviewComponent implements OnInit, OnDestroy {
  cases: CaseDataDto[] = [];
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();
  casesColumnDefs: TableColumn[] = defaultColumnDefs;

  // todo - get value from API
  size = 100000;
  storedDataBetweenIndexes: number[][] = [];
  isLoading = false;

  constructor(
    private caseService: CaseService,
    private dataFetchingServie: DataFetcherService<CaseDataDto>
  ) {}

  fetcher = () => this.caseService.getCasesData();

  async ngOnInit(): Promise<void> {
    this.cases = await this.dataFetchingServie.init(this.fetcher);
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

  containsIndex(scrolledIndex: number): boolean {
    const containsIndex = this.storedDataBetweenIndexes.some(
      (sd) => sd[0] <= scrolledIndex && scrolledIndex <= sd[1]
    );

    return containsIndex;
  }

  async fetchMoreData(index: number): Promise<void> {
    this.cases = await this.dataFetchingServie.fetchMoreData(index, this.cases, this.fetcher);
  }
}
