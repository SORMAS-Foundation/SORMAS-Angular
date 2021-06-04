import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from '../../_services/filter.service';
import { Filter } from '../../_models/common';
import {IFilter} from '../../_constants/i-filter';

@Component({
  selector: 'app-sample-filters',
  templateUrl: './sample-filters.component.html',
  styleUrls: ['./sample-filters.component.scss'],
})
export class SampleFiltersComponent implements IFilter, OnInit {
  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      search: new FormControl(),
      sample: new FormControl(),
      status: new FormControl(),
      sampleType: new FormControl(),
      testResults: new FormControl(),
      specimenCondition: new FormControl(),
      caseClassification: new FormControl(),
      disease: new FormControl(),
      region: new FormControl(),
      district: new FormControl(),
      laboratory: new FormControl(),
      dateFilter: new FormControl(),
      startDate: new FormControl(),
      dueDate: new FormControl(),
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

  resetFilters(): void {
    this.filtersForm.reset();
  }
}
