import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-person-filters',
  templateUrl: './person-filters.component.html',
  styleUrls: ['./person-filters.component.scss'],
})
export class PersonFiltersComponent implements OnInit, OnDestroy {
  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        if (!response.filters.length) {
          this.filtersForm.reset();
        }
      })
    );
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      nameAddressPhoneEmailLike: new FormControl(),
      persons: new FormControl(),
      presentCondition: new FormControl(),
      birthdateYYYY: new FormControl(),
      birthdateMM: new FormControl(),
      birthdateDD: new FormControl(),
      region: new FormControl(),
      district: new FormControl(),
      community: new FormControl(),
    });
  }

  filtersToArray(): void {
    const keys: string[] = Object.keys(this.filtersForm.value);
    const values: string[] = Object.values(this.filtersForm.value);
    this.allFilters = [];
    values.forEach((e, i) => {
      if (values[i] !== null) {
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
