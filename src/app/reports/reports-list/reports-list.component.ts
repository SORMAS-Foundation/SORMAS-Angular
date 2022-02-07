import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './reports-list-table-data';
import { CONFIG_WEEKLY_REPORTS, WEEKLY_REPORT_FILTERS_FORM_ID } from '../../app.constants';
import { WeeklyReportService } from '../../_services/api/weekly-report.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_WEEKLY_REPORTS;
  formId = WEEKLY_REPORT_FILTERS_FORM_ID;

  constructor(public reportService: WeeklyReportService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
