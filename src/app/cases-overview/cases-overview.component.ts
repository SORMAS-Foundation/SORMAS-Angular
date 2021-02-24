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
  size = 100000;
  storedDataBetweenIndexes: number[][] = [];
  isLoading = false;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.caseService.getCasesData().subscribe({
      next: (data) => {
        const virtualPaginationDummyData = new Array(this.size - data.length).fill(null);

        // initially render a full data-set with original + null data
        this.storedDataBetweenIndexes.push([0, data.length]);
        this.cases = [...data, ...virtualPaginationDummyData];
        this.isLoading = false;

        console.log('Initial storedDataBetweenIndexes', this.storedDataBetweenIndexes);
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

  containsIndex(scrolledIndex: number): boolean {
    const containsIndex = this.storedDataBetweenIndexes.some(
      (sd) => sd[0] <= scrolledIndex && scrolledIndex <= sd[1]
    );

    return containsIndex;
  }

  async fetchMoreData(index: number): Promise<void> {
    if (!this.containsIndex(index) && !this.isLoading) {
      this.isLoading = true;
      // TODO - pass the index to get the data to the API to get it from the specified index - and calculate what size you need
      const newData = await this.caseService.getCasesData().toPromise();
      const size = newData.length;
      const newCases = [...this.cases];
      newCases.splice(index, size);
      newCases.splice(index, 0, ...newData);
      this.cases = newCases;

      const newStoredDataBetween = [index, index + newData.length];

      this.storedDataBetweenIndexes.push(newStoredDataBetween);
      this.isLoading = false;
    }
  }
}
