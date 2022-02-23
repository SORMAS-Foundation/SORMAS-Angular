import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardUnderFollowUpService } from '../../../_services/api/dashboard-under-follow-up.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-under-follow-up',
  templateUrl: './dashboard-under-follow-up.component.html',
  styleUrls: ['./dashboard-under-follow-up.component.scss'],
})
export class DashboardUnderFollowUpComponent implements OnInit, OnDestroy {
  data: any;
  total: number;
  totalNotVisited: number;
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private dashboardUnderFollowUpService: DashboardUnderFollowUpService,
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
      this.dashboardUnderFollowUpService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data;
          this.total =
            (this.data.followUp.COOPERATIVE || 0) +
            (this.data.followUp.UNCOOPERATIVE || 0) +
            (this.data.followUp.UNAVAILABLE || 0) +
            (this.data.followUp.NOT_VISITED || 0);
          // this.total = Object.values(this.data.followUp).reduce((a: number, b) => a + Number(b), 0);
          this.totalNotVisited = 0;
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
