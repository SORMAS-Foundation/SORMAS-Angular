import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-person-filters',
  templateUrl: './person-filters.component.html',
  styleUrls: ['./person-filters.component.scss'],
})
export class PersonFiltersComponent implements OnInit {
  @Input() drawer: any = {};

  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      search: new FormControl(),
      persons: new FormControl(),
      presentCondition: new FormControl(),
      birthdateYYYY: new FormControl(),
      birthdateMM: new FormControl(),
      birthdateDD: new FormControl(),
      region: new FormControl(),
      district: new FormControl(),
      community: new FormControl()
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

  resetFilters(): void {
    this.initFiltersForm();
    this.filtersToArray();
  }
  onFormChange(): void {
    this.filtersToArray();
  }
}
