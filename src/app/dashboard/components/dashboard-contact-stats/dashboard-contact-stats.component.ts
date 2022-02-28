import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';
import { DashboardContactStatsService } from '../../../_services/api/dashboard-contact-stats.service';

@Component({
  selector: 'app-dashboard-contact-stats',
  templateUrl: './dashboard-contact-stats.component.html',
  styleUrls: ['./dashboard-contact-stats.component.scss'],
})
export class DashboardContactStatsComponent implements OnInit, OnDestroy {
  data: any;
  total: number;
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private dashboardContactStatsService: DashboardContactStatsService,
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
      this.dashboardContactStatsService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data.contactStats;
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
