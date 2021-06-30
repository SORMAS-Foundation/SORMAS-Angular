import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-contact-filters',
  templateUrl: './contact-filters.component.html',
  styleUrls: ['./contact-filters.component.scss'],
})
export class ContactFiltersComponent implements OnInit, OnDestroy {
  @Input() inTab = false;

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
    if (this.inTab) {
      this.filtersForm = new FormGroup({
        nameUuidCaseLike: new FormControl(),
        contactClassification: new FormControl(),
        contactPerson: new FormControl(),
        responsibleRegion: new FormControl(),
        responsibleOfficer: new FormControl(),
      });
    } else {
      this.filtersForm = new FormGroup({
        nameUuidCaseLike: new FormControl(),
        eventLike: new FormControl(),
        contacts: new FormControl(),
        status: new FormControl(),
        contactCategory: new FormControl(),
        traveler: new FormControl(),
        birthdateYYYY: new FormControl(),
        birthdateMM: new FormControl(),
        birthdateDD: new FormControl(),
        contactClassification: new FormControl(),
        disease: new FormControl(),
        diseaseVariant: new FormControl(),
        sourceCaseClassification: new FormControl(),
        symptomJournalStatus: new FormControl(),
        vaccinationStatus: new FormControl(),
        followUpStatus: new FormControl(),
        followUpUntilDate: new FormControl(),
        responsibleRegion: new FormControl(),
        responsibleDistrict: new FormControl(),
        responsibleCommunity: new FormControl(),
        contactOfficer: new FormControl(),
        relationshipWithCase: new FormControl(),
        reportedBy: new FormControl(),
        moreFilters: new FormControl(),
        placeOfQuarantine: new FormControl(),
        quarantineDetails: new FormControl(),
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

  onFormChange(): void {
    this.filtersToArray();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
