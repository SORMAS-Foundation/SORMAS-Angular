import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRole } from '../../../_constants/enums';
import { Filter } from '../../../_models/common';
import { CountryDto, RegionDto } from '../../../_models/models';
import { CountryService } from '../../../_services/api/country.service';
import { RegionService } from '../../../_services/api/region.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-district-filters',
  templateUrl: './district-filters.component.html',
  styleUrls: ['./district-filters.component.scss'],
})
export class DistrictFiltersComponent implements OnInit, OnDestroy {
  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];
  subscriptions: Subscription[] = [];
  userRoles = UserRole;
  defaultCountryCode = 'DEU';
  countries: CountryDto[] = [];
  countriesOptions: any[] = [];
  regions: RegionDto[] = [];
  regionsOptions: any[] = [];

  constructor(
    private filterService: FilterService,
    private countryService: CountryService,
    private regionService: RegionService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.fetchCountries();
    this.monitorFilters();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      nameEpidLike: new FormControl(),
      relevanceStatus: new FormControl(),
      country: new FormGroup({
        uuid: new FormControl(),
      }),
      region: new FormGroup({
        uuid: new FormControl(),
      }),
    });
  }

  fetchCountries(): void {
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
            region: {
              uuid: undefined,
            },
          });
          if (defaultCountry?.uuid) {
            this.fetchRegions(defaultCountry.uuid);
          }
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchRegions(countryId: string): void {
    const filters = [
      {
        field: 'country',
        value: {
          uuid: countryId,
        },
      },
    ];
    this.subscriptions.push(
      this.regionService.getAll(null, null, filters).subscribe({
        next: (response: any) => {
          this.regions = response.elements;
          this.regionsOptions = this.regions.map((region: any) => ({
            field: region.uuid,
            value: region.name,
          }));
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  monitorFilters(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        if (!response.filters.length) {
          this.filtersForm.reset();
        }
      })
    );
  }

  filtersToArray(): void {
    const keys: string[] = Object.keys(this.filtersForm.value);
    const values: string[] = Object.values(this.filtersForm.value);
    const checkFilter = (filter: any) => {
      if (!filter) {
        return false;
      }
      if (typeof filter === 'object') {
        return Object.values(filter).some((item: any) => item);
      }
      return true;
    };
    this.allFilters = [];
    values.forEach((e, i) => {
      if (checkFilter(values[i])) {
        this.allFilters.push({ field: keys[i], value: values[i] });
      }
    });
    this.filterService.setFilters(this.allFilters);
  }

  onCountryChange(event: any): void {
    this.regions = [];
    this.regionsOptions = [];
    this.filtersForm.patchValue({
      region: {
        uuid: undefined,
      },
    });
    this.fetchRegions(event.value);
    this.onFormChange();
  }

  onFormChange(): void {
    this.filtersToArray();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
