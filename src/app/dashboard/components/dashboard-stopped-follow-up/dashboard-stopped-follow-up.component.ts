import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardStoppedFollowUpService } from '../../../_services/api/dashboard-stopped-follow-up.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-stopped-follow-up',
  templateUrl: './dashboard-stopped-follow-up.component.html',
  styleUrls: ['./dashboard-stopped-follow-up.component.scss'],
})
export class DashboardStoppedFollowUpComponent implements OnInit, OnDestroy {
  data: any;
  total: number;
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private dashboardStoppedFollowUpService: DashboardStoppedFollowUpService,
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
      this.dashboardStoppedFollowUpService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data;
          this.total = Object.values(this.data.followUp).reduce((a: number, b) => a + Number(b), 0);
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
