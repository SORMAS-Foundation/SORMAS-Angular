import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CommunityDto } from '../../../_models/communityDto';
import * as data from './community-add-edit-form-data';
import { CommunityService } from '../../../_services/api/community.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { RegionService } from '../../../_services/api/region.service';
import { DistrictService } from '../../../_services/api/district.service';

@Component({
  selector: 'app-community-add-edit',
  templateUrl: './community-add-edit.component.html',
  styleUrls: ['./community-add-edit.component.scss'],
})
export class CommunityAddEditComponent implements OnInit {
  @Input() selectedResource: CommunityDto;
  myFormElements: FormBase<any>[] = [];
  selectedRegion = '';

  constructor(
    public communityService: CommunityService,
    public regionService: RegionService,
    public districtService: DistrictService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.fetchRegions();
  }

  fetchRegions(): void {
    this.regionService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.selectedRegion = this.selectedResource.region?.uuid || '';
          this.fetchDistricts();
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_COMMUNITY_ADD_EDIT))
          );
          this.disableField('region.uuid');
          this.disableField('district.uuid');
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_COMMUNITY_ADD_EDIT));
        }
        this.updateOptionsForField('region.uuid', response.elements);
      },
      error: () => {},
      complete: () => {},
    });
  }

  fetchDistricts(): void {
    const filters = [
      {
        field: 'region',
        value: { uuid: this.selectedRegion },
      },
    ];
    this.districtService.getAll(null, null, filters, true).subscribe({
      next: (response: any) => {
        this.updateOptionsForField('district.uuid', response.elements);
      },
      error: () => {},
      complete: () => {},
    });
  }

  updateOptionsForField(field: string, options: any): void {
    this.myFormElements = this.formElementControlService.setOptionsToInput(
      options,
      this.myFormElements,
      field,
      'name'
    );
  }

  disableField(field: string): void {
    this.myFormElements = this.formElementControlService.setAttributeToFormElement(
      this.myFormElements,
      field,
      'disabled',
      true
    );
  }

  onFormChange(event: any): void {
    const regionId = event['region.uuid'];
    if (this.selectedRegion !== regionId) {
      this.selectedRegion = regionId;
      this.fetchDistricts();
    }
  }
}
