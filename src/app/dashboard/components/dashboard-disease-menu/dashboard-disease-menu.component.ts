import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntityLink } from '../../../_constants/common';
import { Disease } from '../../../_constants/enums';
import { Filter } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-dashboard-disease-menu',
  templateUrl: './dashboard-disease-menu.component.html',
  styleUrls: ['./dashboard-disease-menu.component.scss'],
})
export class DashboardDiseaseMenuComponent implements OnInit, OnDestroy {
  links: EntityLink[] = [];
  pipe = new EnumToKeyValuePipe();
  currentFilters: Filter[] = [];
  diseases = this.pipe.transform(Disease);
  subscriptions: Subscription[] = [];
  constructor(public filterService: FilterService) {}

  removePrevDiseaseFilter(): void {
    const newFilters: Filter[] = [];
    this.currentFilters.forEach((f: Filter) => {
      if (f.field !== 'disease') {
        newFilters.push(f);
      }
    });
    this.currentFilters = newFilters;
  }

  tabChange(event: any): void {
    const selectedFilter = { field: 'disease', value: this.diseases[event.index].key };
    this.removePrevDiseaseFilter();
    this.currentFilters.push(selectedFilter);
    this.filterService.setFilters(this.currentFilters);
  }

  ngOnInit(): void {
    this.filterService.getFilters().subscribe((val) => {
      this.currentFilters = val.filters;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
