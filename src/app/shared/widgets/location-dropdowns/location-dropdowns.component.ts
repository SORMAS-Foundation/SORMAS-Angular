import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommunityService } from '../../../_services/api/community.service';
import { CountryService } from '../../../_services/api/country.service';
import { DistrictService } from '../../../_services/api/district.service';
import { RegionService } from '../../../_services/api/region.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { NotificationService } from '../../../_services/notification.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-location-dropdowns',
  templateUrl: './location-dropdowns.component.html',
  styleUrls: ['./location-dropdowns.component.scss'],
})
export class LocationDropdownsComponent implements OnInit {
  config: FormElementBase<string>;
  group: FormGroup; // Main form
  countryControl: any;
  regionControl: any;
  districtControl: any;
  communityControl: any;
  locationForm = new FormGroup({
    // Widget form
    country: new FormControl(),
    region: new FormControl(),
    district: new FormControl(),
    community: new FormControl(),
  });
  countryKey = '';
  regionKey = '';
  districtKey = '';
  communityKey = '';
  myFormElements: any[] = [];
  countryOptions: any[];
  regionOptions: any[];
  districtOptions: any[];
  communityOptions: any[];
  subscriptions: Subscription[] = [];
  selectedCountry: string;
  selectedRegion: string;
  selectedDistrict: string;
  selectedCommunity: string;

  constructor(
    private countryService: CountryService,
    private regionService: RegionService,
    private districtService: DistrictService,
    private communityService: CommunityService,
    private notificationService: NotificationService,
    private formActionService: FormActionsService
  ) {}

  makeOptions(list: any[]): any[] {
    return list.map((item: any) => ({
      key: item.uuid,
      value: item.name ? item.name : item.displayName,
    }));
  }

  fetchCountries(): void {
    this.subscriptions.push(
      this.countryService.getAll().subscribe({
        next: (response: any) => {
          this.countryOptions = this.makeOptions(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchRegions(selectedCountry?: string): void {
    const filters = [
      {
        field: 'country',
        value: { uuid: selectedCountry },
      },
    ];
    this.subscriptions.push(
      this.regionService.getAll(null, null, selectedCountry ? filters : null, true).subscribe({
        next: (response: any) => {
          this.regionOptions = this.makeOptions(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchDistricts(selectedRegion: string): void {
    const filters = [
      {
        field: 'region',
        value: { uuid: selectedRegion },
      },
    ];

    this.subscriptions.push(
      this.districtService.getAll(null, null, filters, true).subscribe({
        next: (response: any) => {
          this.districtOptions = this.makeOptions(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchCommunitites(selectedDistrict: string): void {
    const filters = [
      {
        field: 'district',
        value: { uuid: selectedDistrict },
      },
    ];
    this.subscriptions.push(
      this.communityService.getAll(null, null, filters, true).subscribe({
        next: (response: any) => {
          this.communityOptions = this.makeOptions(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  resetCommunity(): void {
    this.communityOptions = [];
    this.locationForm.controls.community?.setValue(undefined);
    this.selectedCommunity = '';
  }

  resetDistrict(): void {
    this.districtOptions = [];
    this.locationForm.controls.district?.setValue(undefined);
    this.selectedDistrict = '';
  }

  resetRegion(): void {
    this.regionOptions = [];
    this.locationForm.controls.region?.setValue(undefined);
    this.selectedRegion = '';
  }

  resetCountry(): void {
    this.countryOptions = [];
    this.locationForm.controls.country?.setValue(undefined);
    this.selectedCountry = '';
  }

  resetForm(): void {
    this.resetCountry();
    this.resetRegion();
    this.resetDistrict();
    this.resetCommunity();
  }

  onFormChange(event: any): void {
    if (event.source.ariaLabel === 'country') {
      this.resetRegion();
      this.resetDistrict();
      this.resetCommunity();
      this.fetchRegions(event.value);
      this.countryControl?.setValue(event.value);
      this.regionControl?.setValue(undefined);
      this.districtControl?.setValue(undefined);
      this.communityControl?.setValue(undefined);
      this.formActionService.setInputChange(this.countryKey, true);
    }

    if (event.source.ariaLabel === 'region') {
      this.resetCommunity();
      this.fetchDistricts(event.value);
      this.regionControl?.setValue(event.value);
      this.districtControl?.setValue(undefined);
      this.communityControl?.setValue(undefined);
      this.formActionService.setInputChange(this.regionKey, true);
    }
    if (event.source.ariaLabel === 'district') {
      this.fetchCommunitites(event.value);
      this.districtControl?.setValue(event.value);
      this.communityControl?.setValue(undefined);
      this.formActionService.setInputChange(this.districtKey, true);
    }
    if (event.source.ariaLabel === 'community') {
      this.communityControl?.setValue(event.value);
      this.formActionService.setInputChange(this.communityKey, true);
    }
  }

  updateWidgetForm(): void {
    if (this.countryControl) {
      this.fetchCountries();
      this.selectedCountry = this.group.value[this.countryKey];
      this.locationForm.controls.country?.setValue(this.selectedCountry);
      this.fetchRegions(this.selectedCountry);
    }
    if (this.regionControl) {
      this.fetchRegions(this.selectedCountry || undefined);
      this.selectedRegion = this.group.value[this.regionKey];
      this.locationForm.controls.region?.setValue(this.selectedRegion);
      this.fetchDistricts(this.selectedRegion);
    }
    if (this.districtControl) {
      this.selectedDistrict = this.group.value[this.districtKey];
      this.fetchDistricts(this.selectedRegion);
      this.locationForm.controls.district?.setValue(this.selectedDistrict);
      this.fetchCommunitites(this.selectedDistrict);
    }
    if (this.communityControl) {
      this.selectedCommunity = this.group.value[this.communityKey];
      this.fetchCommunitites(this.group.value[this.districtKey]);
      this.locationForm.controls.community?.setValue(this.selectedCommunity);
    }
  }

  allFieldsUndefined(): boolean {
    return (
      !this.group.value[this.countryKey] &&
      !this.group.value[this.regionKey] &&
      !this.group.value[this.districtKey] &&
      !this.group.value[this.communityKey]
    );
  }

  ngOnInit(): void {
    this.countryKey = this.config?.widgetInfo.country?.key;
    this.regionKey = this.config?.widgetInfo.region?.key;
    this.districtKey = this.config?.widgetInfo.district?.key;
    this.communityKey = this.config?.widgetInfo.community?.key;
    this.countryControl = this.group?.get([this.countryKey]);
    this.regionControl = this.group?.get([this.regionKey]);
    this.districtControl = this.group?.get([this.districtKey]);
    this.communityControl = this.group?.get([this.communityKey]);

    this.updateWidgetForm();

    this.subscriptions.push(
      this.regionControl?.valueChanges.subscribe(() => {
        setTimeout(() => {
          if (this.allFieldsUndefined()) {
            this.resetForm();
          }
        });
      })
    );
  }
}
