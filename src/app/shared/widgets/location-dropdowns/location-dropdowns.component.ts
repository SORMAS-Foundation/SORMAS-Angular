import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../_constants/common';
import { CommunityDto } from '../../../_models/communityDto';
import { DistrictDto } from '../../../_models/districtDto';
import { RegionDto } from '../../../_models/regionDto';
import { CommunityService } from '../../../_services/api/community.service';
import { DistrictService } from '../../../_services/api/district.service';
import { RegionService } from '../../../_services/api/region.service';
import { NotificationService } from '../../../_services/notification.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-location-dropdowns',
  templateUrl: './location-dropdowns.component.html',
  styleUrls: ['./location-dropdowns.component.scss'],
})
export class LocationDropdownsComponent implements OnInit {
  regions: RegionDto[] = [];
  districts: DistrictDto[] = [];
  communities: CommunityDto[] = [];
  locationForm = new FormGroup({
    region: new FormControl(),
    district: new FormControl(),
    community: new FormControl(),
  });
  myFormElements: any[] = [];
  regionOptions: any[];
  districtOptions: any[];
  communityOptions: any[];
  subscriptions: Subscription[] = [];
  formToChange: FormBase<any>[] = [];

  constructor(
    private regionService: RegionService,
    private districtService: DistrictService,
    private communityService: CommunityService,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService
  ) {}

  makeOptions(list: any[]): any[] {
    return list.map((item: any) => ({
      key: item.uuid,
      value: item.name,
    }));
  }

  fetchRegions(): void {
    this.subscriptions.push(
      this.regionService.getAll().subscribe({
        next: (response: any) => {
          this.regions = response.elements;
          const options = this.makeOptions(this.regions);
          this.regionOptions = options;
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
          this.districts = response.elements;
          const options = this.makeOptions(this.districts);
          this.districtOptions = options;
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
          this.communities = response.elements;
          const options = this.makeOptions(this.communities);
          this.communityOptions = options;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  resetCommunities(): void {
    this.communityOptions = [];
  }

  onFormChange(event: any): void {
    if (event.source.ariaLabel === 'region') {
      this.fetchDistricts(event.value);
      this.resetCommunities();
    }
    if (event.source.ariaLabel === 'district') {
      this.fetchCommunitites(event.value);
    }
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.ENTITY_FORM_DATA) {
          this.formToChange = response;
          console.log('formToChange', this.formToChange);
        }
      })
    );
    this.fetchRegions();
  }
}
