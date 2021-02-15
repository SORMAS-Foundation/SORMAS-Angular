import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CaseDataDto } from 'api-client';
import { Subscription } from 'rxjs';
import { CaseService } from '../services/case.service';
import { ApiError } from '../shared/http/BaseDataService';
import { TableColumn } from '../shared/table/table-column';

@Component({
  selector: 'app-cases-overview',
  templateUrl: './cases-overview.component.html',
  styleUrls: ['./cases-overview.component.scss'],
})
export class CasesOverviewComponent implements OnInit, OnDestroy {
  cases: CaseDataDto[] = [];
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();
  casesColumnDefs: TableColumn[] = [
    {
      name: 'Case id',
      dataKey: 'uuid',
    },
    {
      name: 'External id',
      dataKey: 'externalID',
    },
    {
      name: 'Disease',
      dataKey: 'disease',
      isSortable: true,
    },
    {
      name: 'Disease variant',
      dataKey: 'diseaseDetails',
      isSortable: true,
    },
    {
      name: 'Case classification',
      dataKey: 'caseClassification',
      isSortable: true,
    },
    {
      name: 'Outcome of case',
      dataKey: 'outcome',
      isSortable: true,
    },
    {
      name: 'Investigation status',
      dataKey: 'investigationStatus',
      isSortable: true,
    },
    {
      name: 'First name',
      dataKey: 'person.firstName',
      isSortable: true,
    },
    {
      name: 'Last name',
      dataKey: 'person.lastName',
      isSortable: true,
    },
    {
      name: 'District',
      dataKey: 'district.caption',
      isSortable: true,
    },
    {
      name: 'Health facility',
      dataKey: 'healthFacility.caption',
      isSortable: true,
    },
    {
      name: 'Point of entry',
      dataKey: 'pointOfEntry.caption',
      isSortable: true,
    },
    {
      name: 'Date of report',
      dataKey: 'reportDate',
      isSortable: true,
    },
    {
      name: 'Quarantine end',
      dataKey: 'quarantineTo',
      isSortable: true,
    },
    {
      name: 'Follow-up status',
      dataKey: 'followUpStatus',
      isSortable: true,
    },
    {
      name: 'Follow-up until',
      dataKey: 'followUpUntil',
      isSortable: true,
    },
  ];

  constructor(private caseService: CaseService) {}

  // getProperty = (obj: any, path: any) => path.split('.').reduce((o: any, p: any) => o && o[p], obj);

  // pathDataAccessor = (item: any, path: string) => {
  //   return path.split('.').reduce((accumulator: any, key: string) => {
  //     return accumulator ? accumulator[key] : undefined;
  //   }, item);
  // }

  ngOnInit(): void {
    this.subscription = this.caseService.getCasesData().subscribe({
      next: (data) => {
        this.cases = data;
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
}
