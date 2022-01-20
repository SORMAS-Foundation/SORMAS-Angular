import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './msers-list-table-data';
import { CONFIG_MSERS, MSERS_FILTERS_FORM_ID } from '../../app.constants';
import { AggregateReportService } from '../../_services/api/aggregate-report.service';
import { RegionService } from '../../_services/api/region.service';

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

  constructor(public mserService: AggregateReportService, public testService: RegionService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddModal(): void {
    // open add form
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
