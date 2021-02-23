import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import { CaseService } from '../services/case.service';
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
  currentIndex = 0;
  size = 100000;
  // batchSize = 50;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.subscription = this.caseService.getCasesData().subscribe({
      next: (data) => {
        // this.batchSize = data.length;
        this.currentIndex = data.length;
        const virtualPaginationDummyData = new Array(this.size - this.currentIndex).fill(null);

        // TODO - initially render a full data-set with original + null data
        this.cases = [...data, ...virtualPaginationDummyData];
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
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
    // TODO - pass the index to get the data to the API to get it from the specified index

    // todo - not ok - as user can scroll back
    // better - store an array with indexes that have data and check that index is not between them
    if (index > this.currentIndex - 10) {
      const newData = await this.caseService.getCasesData().toPromise();
      const size = newData.length;
      const newCases = [...this.cases];
      newCases.splice(index, size);
      newCases.splice(index, size, ...newData);
      this.cases = newCases;
      this.currentIndex = index + newData.length;

      console.log('new cases', this.cases, this.cases.length);
    }
  }
}
