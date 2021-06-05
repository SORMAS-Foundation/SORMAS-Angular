import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CaseService } from '../../_services/api/case.service';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './case-list-table-data';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CONFIG_CASES } from '../../_constants/storage';
import { HEADER_HEIGHT } from '../../app.constants';
import { AddBaseModalComponent } from '../../shared/modals/add-base-modal/add-base-modal.component';
import { CaseAddComponent } from '../case-add/case-add.component';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit, OnDestroy {
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  headerHeight = HEADER_HEIGHT;

  private subscription: Subscription[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  selectCase(selection: SelectionModel<any>): void {
    // eslint-disable-next-line no-console
    console.log('event', selection);
  }

  clickCase(event: any): void {
    this.router.navigate([`/cases/case/${event.item.uuid}/details`]);
  }

  openAddCaseModal(): void {
    const dialogRef = this.dialog.open(AddBaseModalComponent, {
      width: '1240px',
      data: {
        title: this.translateService.instant('Add new case'),
        component: CaseAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('rrrrr');
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
