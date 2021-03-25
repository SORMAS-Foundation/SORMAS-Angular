import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Filter {
  key: string;
  value: string;
}

@Component({
  selector: 'app-case-filters',
  templateUrl: './case-filters.component.html',
  styleUrls: ['./case-filters.component.scss'],
})
export class CaseFiltersComponent {
  filters: Filter[] = [];
  filtersForm = new FormGroup({
    caseOutcome: new FormControl(),
    disease: new FormControl(),
  });
  resetFilters(): void {
    console.log('reset filters');
    this.filters = [];
  }
  radioChange(event: any): void {
    const currentFilter: Filter = { key: event.source?.name, value: event.value };
    const index = this.filters.findIndex((e) => e.key === currentFilter.key);
    if (index === -1) {
      this.filters.push(currentFilter);
    } else {
      this.filters[index] = currentFilter;
    }
    console.log(this.filters);
  }
  dropdownChange(event: any): void {
    // this.filters.push({ key: event.source?.name, value: event.value });
    console.log(event, this.filtersForm);
  }
}
