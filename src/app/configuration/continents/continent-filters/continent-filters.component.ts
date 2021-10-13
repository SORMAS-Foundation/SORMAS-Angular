import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { UserRole } from '../../../_models/userRole';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-continent-filters',
  templateUrl: './continent-filters.component.html',
  styleUrls: ['./continent-filters.component.scss'],
})
export class ContinentFiltersComponent implements OnInit, OnDestroy {
  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];
  subscriptions: Subscription[] = [];
  userRoles = UserRole;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.monitorFilters();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      nameLike: new FormControl(),
      relevanceStatus: new FormControl(),
    });
  }

  monitorFilters(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        if (!response.filters.length) {
          this.filtersForm.reset();
        }
      })
    );
  }

  filtersToArray(): void {
    const keys: string[] = Object.keys(this.filtersForm.value);
    const values: string[] = Object.values(this.filtersForm.value);
    const checkFilter = (filter: any) => {
      if (!filter) {
        return false;
      }
      if (typeof filter === 'object') {
        return Object.values(filter).some((item: any) => item);
      }
      return true;
    };
    this.allFilters = [];
    values.forEach((e, i) => {
      if (checkFilter(values[i])) {
        this.allFilters.push({ field: keys[i], value: values[i] });
      }
    });
    this.filterService.setFilters(this.allFilters);
  }

  onFormChange(): void {
    this.filtersToArray();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
