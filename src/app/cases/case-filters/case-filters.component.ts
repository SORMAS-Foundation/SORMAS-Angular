import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Disease } from '../../_models/disease';
import { FacilityTypeObject } from '../../_models/facility';

export interface DropdownData {
  key: string;
  value: string;
}

export interface Filters {
  field: string;
  value: string | string[];
}

@Component({
  selector: 'app-case-filters',
  templateUrl: './case-filters.component.html',
  styleUrls: ['./case-filters.component.scss'],
})
export class CaseFiltersComponent implements OnInit {
  filtersForm = new FormGroup({});
  allFilters: Filters[] = [];
  allDisease: DropdownData[] = this.getDropdownOptions(Disease);
  allFacilityTypes: DropdownData[] = this.getDropdownOptions(FacilityTypeObject);

  @Input() drawer: any = {};

  getDropdownOptions(type: object): DropdownData[] {
    const list = Object.values(type);
    let processedList: DropdownData[] = [];
    processedList = list.map((el) => {
      return { key: el.toLocaleLowerCase().replaceAll('_', ' '), value: el };
    });
    return processedList;
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
    console.log('all filters = ', this.allFilters); // TODO: delete this before merge with main
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      search: new FormControl(),
      cases: new FormControl(),
      caseOrigin: new FormControl(),
      caseOutcome: new FormControl(),
      disease: new FormControl(),
      caseClassification: new FormControl(),
      followUpStatus: new FormControl(),
      dateFilter: new FormControl(),
      newCaseFrom: new FormControl(),
      newCaseTo: new FormControl(),
      quarantineEnd: new FormControl(),
      followUpUntil: new FormControl(),
      sympromsJournal: new FormControl(),
      moreFilters: new FormControl(),
      presentCondition: new FormControl(),
      responsibleRegion: new FormControl(),
      responsibleDistrict: new FormControl(),
      responsibleCommunity: new FormControl(),
      responsibleSurveillor: new FormControl(),
      reportedBy: new FormControl(),
      reportingUser: new FormControl(),
      facilityCategory: new FormControl(),
      facilityType: new FormControl(),
      facility: new FormControl(),
    });
  }

  resetFilters(): void {
    this.initFiltersForm();
    this.filtersToArray();
  }
  onFormChange(): void {
    this.filtersToArray();
  }

  ngOnInit(): void {
    this.initFiltersForm();
  }
}
