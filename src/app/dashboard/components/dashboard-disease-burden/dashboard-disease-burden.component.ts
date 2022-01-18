import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter, ViewOptions, VIEW_OPTIONS } from '../../../_models/common';
import { DiseaseBurdenService } from '../../../_services/api/disease-burden.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-disease-burden',
  templateUrl: './dashboard-disease-burden.component.html',
  styleUrls: ['./dashboard-disease-burden.component.scss'],
})
export class DashboardDiseaseBurdenComponent implements OnInit, OnDestroy {
  diseases: any;
  data: any;
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];
  visible = true;
  viewOptions = VIEW_OPTIONS;
  activeView: ViewOptions = VIEW_OPTIONS.PRIMARY;

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
          this.diseases = data;
          this.data =
            this.activeView === this.viewOptions.PRIMARY
              ? this.diseases.slice(0, 6)
              : this.diseases;
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

  onViewChange(event: ViewOptions): void {
    this.activeView = event;
    this.data =
      this.activeView === this.viewOptions.PRIMARY ? this.diseases.slice(0, 6) : this.diseases;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
