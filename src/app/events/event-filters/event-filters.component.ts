import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss'],
})
export class EventFiltersComponent implements OnInit {
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
      riskLevel: new FormControl(),
      eventStatus: new FormControl(),
      eventInvestigationStatus: new FormControl(),
      event: new FormControl(),
      searchParticipant: new FormControl(),
      searchGroup: new FormControl(),
      disease: new FormControl(),
      reportingUser: new FormControl(),
      responsibleUser: new FormControl(),
      region: new FormControl(),
      district: new FormControl(),
      community: new FormControl(),
      dateType: new FormControl(),
      startDate: new FormControl(),
      dueDate: new FormControl(),
      countMethod: new FormControl(),
      srcType: new FormControl(),
      typeOfPlace: new FormControl(),
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
