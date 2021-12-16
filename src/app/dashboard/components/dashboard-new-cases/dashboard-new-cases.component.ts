import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardNewCasesService } from '../../../_services/api/dashboard-new-cases.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-new-cases',
  templateUrl: './dashboard-new-cases.component.html',
  styleUrls: ['./dashboard-new-cases.component.scss'],
})
export class DashboardNewCasesComponent implements OnDestroy, OnInit {
  newCases: any;
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];

  constructor(
    private dashboardNewCasesService: DashboardNewCasesService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.dashboardNewCasesService.getCalculated(this.filters).subscribe({
          next: (data: any) => {
            this.newCases = data;
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
