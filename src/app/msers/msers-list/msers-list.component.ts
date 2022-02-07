import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './msers-list-table-data';
import { ADD_MODAL_MAX_WIDTH, CONFIG_MSERS, MSERS_FILTERS_FORM_ID } from '../../app.constants';
import { AggregateReportService } from '../../_services/api/aggregate-report.service';
import { MserAddComponent } from '../mser-add/mser-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';

@Component({
  selector: 'app-msers-list',
  templateUrl: './msers-list.component.html',
  styleUrls: ['./msers-list.component.scss'],
})
export class MsersListComponent implements OnInit, OnDestroy {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_MSERS;
  formId = MSERS_FILTERS_FORM_ID;
  private subscription: Subscription[] = [];

  constructor(
    public mserService: AggregateReportService,
    public translateService: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewAggregateReport'),
        component: MserAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
