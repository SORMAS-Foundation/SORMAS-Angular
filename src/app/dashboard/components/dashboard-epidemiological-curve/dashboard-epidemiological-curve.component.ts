import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardEpidemiologicalDataService } from '../../../_services/api/dashboard-epidemiological-data.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-epidemiological-curve',
  templateUrl: './dashboard-epidemiological-curve.component.html',
  styleUrls: ['./dashboard-epidemiological-curve.component.scss'],
})
export class DashboardEpidemiologicalCurveComponent implements OnInit, OnDestroy {
  data: any[] = [];
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private epiDataService: DashboardEpidemiologicalDataService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.fetchEpiData();
      })
    );
  }

  fetchEpiData(): void {
    this.subscriptions.push(
      this.epiDataService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data;
          console.log(this.data);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
