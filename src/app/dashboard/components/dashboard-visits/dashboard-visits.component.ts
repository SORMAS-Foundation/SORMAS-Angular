import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardVisitsService } from '../../../_services/api/dashboard-visits.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-visits',
  templateUrl: './dashboard-visits.component.html',
  styleUrls: ['./dashboard-visits.component.scss'],
})
export class DashboardVisitsComponent implements OnInit, OnDestroy {
  data: any;
  total: number;
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];
  unavailablePercent: number;
  uncooperativePercent: number;
  cooperativePercent: number;
  missedPercent: number;

  constructor(
    private dashboardVisitsService: DashboardVisitsService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.fetchData();
      })
    );
  }

  fetchData(): void {
    this.subscriptions.push(
      this.dashboardVisitsService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data;
          this.total =
            (this.data.visits.COOPERATIVE || 0) +
            (this.data.visits.UNCOOPERATIVE || 0) +
            (this.data.visits.UNAVAILABLE || 0) +
            (this.data.visits.MISSED || 0);
          this.unavailablePercent = this.total ? (data.visits.UNAVAILABLE ?? 0) / this.total : 0;
          this.cooperativePercent = this.total ? (data.visits.COOPERATIVE ?? 0) / this.total : 0;
          this.uncooperativePercent = this.total
            ? (data.visits.UNCOOPERATIVE ?? 0) / this.total
            : 0;
          this.missedPercent = this.total ? (data.visits.MISSED ?? 0) / this.total : 0;
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
