import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { defaultColumnDefs } from './reports-officer-summary-table-data';
import { TableColumn } from '../../_models/common';
import { WeeklyReportOfficerSummaryService } from '../../_services/api/weekly-report-officer-summary.service';
import { ADD_MODAL_MAX_WIDTH, CONFIG_WEEKLY_REPORTS_OFFICER_SUMMARY } from '../../app.constants';
import { ReportsListComponent } from '../reports-list/reports-list.component';

@Component({
  selector: 'app-reports-officer-summary',
  templateUrl: './reports-officer-summary.component.html',
  styleUrls: ['./reports-officer-summary.component.scss'],
})
export class ReportsOfficerSummaryComponent implements OnInit, OnDestroy {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_WEEKLY_REPORTS_OFFICER_SUMMARY;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reportService: WeeklyReportOfficerSummaryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  showReport(report: any): void {
    const dialogRef = this.dialog.open(ReportsListComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      width: `calc(${ADD_MODAL_MAX_WIDTH} - 48px)`,
      data: {
        report,
        epiWeek: this.data.epiWeek,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
