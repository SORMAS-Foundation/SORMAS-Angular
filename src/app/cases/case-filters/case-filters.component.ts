import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Disease } from '../../_models/disease';
import { FacilityType } from '../../_models/facility';

export interface DropdownData {
  key: string;
  value: string;
}

@Component({
  selector: 'app-case-filters',
  templateUrl: './case-filters.component.html',
  styleUrls: ['./case-filters.component.scss'],
})
export class CaseFiltersComponent {
  filtersForm = new FormGroup({
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
    facilityType: new FormControl(),
  });

  allDisease: DropdownData[] = this.getDropdownOptions(Disease);
  allFacilityTypes: DropdownData[] = this.getDropdownOptions(FacilityType);

  getDropdownOptions(type: object): DropdownData[] {
    const list = Object.values(type);
    let processedList: DropdownData[] = [];
    processedList = list.map((el) => {
      return { key: el.toLocaleLowerCase().replaceAll('_', ' '), value: el };
    });
    return processedList;
  }

  resetFilters(): void {
    console.log('reset filters');
    this.filtersForm = new FormGroup({});
    console.log(this.filtersForm.value);
  }
  radioChange(): void {
    console.log(this.filtersForm.value);
  }
  dropdownChange(event: any): void {
    console.log(event, this.filtersForm.value);
  }
}
