import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CaseService } from '../../_services/api/case.service';
import { CaseItem } from '../../_models/case';
import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { TableColumn } from '../../shared/table/table-column';
import { defaultColumnDefs } from '../../_entity-data/case';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseItem[] = [];
  defaultColumns: TableColumn[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.getCases();
  }

  getCases(): void {
    this.caseService.getAll({ page: 0, size: constants.PAGE_SIZE }).subscribe({
      next: (response: any) => {
        this.cases = response.elements;
      },
      error: (err: any) => {
        this.notificationService.error(err);
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
    this.notificationService.confirm().subscribe((result) => {
      if (result) {
        // eslint-disable-next-line no-console
        console.log('yyyyyyyyyyyyyyy', result);
      }
    });
  }

  selectionData(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log(selection);
  }

  onCaseSelect(event: any): void {
    this.router.navigate([`/cases/case/${event.id}/details`]);
  }
}
