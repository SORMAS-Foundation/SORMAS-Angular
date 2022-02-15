import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './reports-region-summary-table-data';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIG_WEEKLY_REPORTS,
  WEEKLY_REPORT_FILTERS_FORM_ID,
} from '../../app.constants';
import { ReportsOfficerSummaryComponent } from '../reports-officer-summary/reports-officer-summary.component';
import { WeeklyReportRegionSummaryService } from '../../_services/api/weekly-report-region-summary.service';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-reports-region-summary',
  templateUrl: './reports-region-summary.component.html',
  styleUrls: ['./reports-region-summary.component.scss'],
})
export class ReportsRegionSummaryComponent implements OnInit, OnDestroy {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_WEEKLY_REPORTS;
  formId = WEEKLY_REPORT_FILTERS_FORM_ID;
  epiWeek: string;
  subscriptions: Subscription[] = [];

  constructor(
    public reportService: WeeklyReportRegionSummaryService,
    private dialog: MatDialog,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.subscriptions.push(
      this.filterService.getFilters().subscribe(({ filters }) => {
        this.epiWeek = filters[0]?.value;
      })
    );
  }

  showReport(report: any): void {
    const dialogRef = this.dialog.open(ReportsOfficerSummaryComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      width: `calc(${ADD_MODAL_MAX_WIDTH} - 24px)`,
      data: {
        report,
        epiWeek: this.epiWeek,
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
