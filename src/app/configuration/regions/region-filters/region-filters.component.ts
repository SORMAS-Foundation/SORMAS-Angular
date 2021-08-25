import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRole } from '../../../_constants/enums';
import { Filter } from '../../../_models/common';
import { CountryDto } from '../../../_models/countryDto';
import { CountryService } from '../../../_services/api/country.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-region-filters',
  templateUrl: './region-filters.component.html',
  styleUrls: ['./region-filters.component.scss'],
})
export class RegionFiltersComponent implements OnInit, OnDestroy {
  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];
  subscriptions: Subscription[] = [];
  userRoles = UserRole;
  defaultCountryCode = 'DEU';
  countries: CountryDto[] = [];
  countriesOptions: any[] = [];

  constructor(
    private filterService: FilterService,
    private countryService: CountryService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.subscriptions.push(
      this.countryService.getAll().subscribe({
        next: (response: any) => {
          this.countries = response.elements;
          this.countriesOptions = this.countries.map((country: any) => ({
            field: country.uuid,
            value: country.displayName,
          }));
          const defaultCountry = this.countries.find(
            (country: any) => country.isoCode === this.defaultCountryCode
          );
          this.filtersForm.patchValue({
            country: {
              uuid: defaultCountry?.uuid,
            },
          });
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
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
      nameEpidLike: new FormControl(),
      relevanceStatus: new FormControl(),
      country: new FormGroup({
        uuid: new FormControl(),
      }),
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
