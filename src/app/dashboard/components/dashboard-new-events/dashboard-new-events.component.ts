import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardNewEventsService } from '../../../_services/api/dashboard-new-events-service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-new-events',
  templateUrl: './dashboard-new-events.component.html',
  styleUrls: ['./dashboard-new-events.component.scss'],
})
export class DashboardNewEventsComponent implements OnInit, OnDestroy {
  newEvents: any;
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];

  constructor(
    private dashboardNewEventsService: DashboardNewEventsService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.dashboardNewEventsService.getCalculated(this.filters).subscribe({
          next: (data: any) => {
            this.newEvents = data;
          },
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => {},
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
