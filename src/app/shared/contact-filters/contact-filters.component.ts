import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-contact-filters',
  templateUrl: './contact-filters.component.html',
  styleUrls: ['./contact-filters.component.scss'],
})
export class ContactFiltersComponent implements OnInit {
  @Input() drawer: any = {};
  @Input() inTab: boolean = false;

  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    if (this.inTab) {
      this.filtersForm = new FormGroup({
        search: new FormControl(),
        contactClassification: new FormControl(),
        contactPerson: new FormControl(),
        responsibleRegion: new FormControl(),
        responsibleOfficer: new FormControl(),
      });
    } else {
      this.filtersForm = new FormGroup({
        search: new FormControl(),
        eventSearch: new FormControl(),
        contacts: new FormControl(),
        status: new FormControl(),
        traveler: new FormControl(),
        birthdateYYYY: new FormControl(),
        birthdateMM: new FormControl(),
        birthdateDD: new FormControl(),
        contactClassification: new FormControl(),
        disease: new FormControl(),
        caseClassification: new FormControl(),
        followUpStatus: new FormControl(),
        followUpUntilDate: new FormControl(),
        responsibleRegion: new FormControl(),
        responsibleDistrict: new FormControl(),
        responsibleCommunity: new FormControl(),
        contactPerson: new FormControl(),
        reportedBy: new FormControl(),
        moreFilters: new FormControl(),
        placeOfQuarantine: new FormControl(),
        quarantineEndDate: new FormControl(),
        dateFilter: new FormControl(),
        referenceDate: new FormControl(),
        startDate: new FormControl(),
        dueDate: new FormControl(),
      });
    }
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
