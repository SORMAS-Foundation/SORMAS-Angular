import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT,
  VIRTUAL_SCROLL_PAGE_SIZE,
} from 'src/app/app.constants';
import { TableColumn } from '../../shared/table/table-column';
import { CaseService } from '../../_services/api/case.service';
import { Router } from '@angular/router';
import { CaseItem, defaultColumnDefs } from '../../_models/case';

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

  constructor(private caseService: CaseService, private router: Router) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getAll({ page: 0, size: 2 }).subscribe({
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

  selectionData(selection: any): void {
    // eslint-disable-next-line no-console
    this.router.navigate([`/cases/case/${  selection[0].id}/details`]);
  }

  fetchMoreData(index: number): void {
    console.log('index', index);
  }
}
