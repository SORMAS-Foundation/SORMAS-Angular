import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DiseaseBurdenService } from '../../../_services/api/disease-burden';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-disease-burden',
  templateUrl: './dashboard-disease-burden.component.html',
  styleUrls: ['./dashboard-disease-burden.component.scss'],
})
export class DashboardDiseaseBurdenComponent implements OnInit, OnDestroy {
  data: any;
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];
  visible = true;

  constructor(
    private diseaseBurdenService: DiseaseBurdenService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.fetchDiseaseBurden();
      })
    );
  }

  fetchDiseaseBurden(): void {
    this.subscriptions.push(
      this.diseaseBurdenService.getCalculated(this.filters).subscribe({
        next: (data: any) => {
          this.data = data;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  toggleSection(event: any): void {
    this.visible = !event.checked;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
