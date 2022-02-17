import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardContactsService } from '../../../_services/api/dashboard-contacts.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-contacts',
  templateUrl: './dashboard-contacts.component.html',
  styleUrls: ['./dashboard-contacts.component.scss'],
})
export class DashboardContactsComponent implements OnInit, OnDestroy {
  contacts: any;
  total: number;
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private dashboardContactsService: DashboardContactsService,
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
      this.dashboardContactsService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.contacts = data;
          this.total = Object.values(this.contacts.contactClassificationCount).reduce(
            (a: number, b) => a + Number(b),
            0
          );
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
