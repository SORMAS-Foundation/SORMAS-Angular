import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './reports-list-table-data';
import { CONFIG_WEEKLY_REPORTS, WEEKLY_REPORT_FILTERS_FORM_ID } from '../../app.constants';
import { WeeklyReportService } from '../../_services/api/weekly-report.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit, OnDestroy {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_WEEKLY_REPORTS;
  formId = WEEKLY_REPORT_FILTERS_FORM_ID;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reportService: WeeklyReportService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
