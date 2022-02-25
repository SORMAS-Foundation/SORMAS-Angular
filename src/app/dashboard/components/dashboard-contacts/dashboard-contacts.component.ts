import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DASHBOARD_CONTACTS_DISEASE_LIMIT } from '../../../app.constants';
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
  diseases: any[] = [];
  total: number;
  diseaseLimit = DASHBOARD_CONTACTS_DISEASE_LIMIT;
  showAllDiseases: boolean;
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
          this.contacts = data.contactClassificationCount;
          this.diseases = data.diseases || [];
          this.total = Object.values(this.contacts).reduce((a: number, b) => a + Number(b), 0);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  toggleDiseaseLimit(): void {
    this.showAllDiseases = !this.showAllDiseases;
    this.diseaseLimit = this.showAllDiseases
      ? this.diseases.length
      : DASHBOARD_CONTACTS_DISEASE_LIMIT;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
