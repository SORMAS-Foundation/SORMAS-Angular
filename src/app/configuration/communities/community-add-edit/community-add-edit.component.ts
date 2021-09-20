import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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

  constructor(
    public communityService: CommunityService,
    public regionService: RegionService,
    public districtService: DistrictService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    forkJoin({
      regions: this.regionService.getAll(null, null, null, true),
      districts: this.districtService.getAll(null, null, null, true),
    }).subscribe(({ regions, districts }) => {
      if (this.selectedResource) {
        this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
          this.selectedResource,
          JSON.parse(JSON.stringify(data.FORM_DATA_COMMUNITY_ADD_EDIT))
        );
        this.myFormElements = this.formElementControlService.setAttributeToFormElement(
          this.myFormElements,
          'region.uuid',
          'disabled',
          true
        );
        this.myFormElements = this.formElementControlService.setAttributeToFormElement(
          this.myFormElements,
          'district.uuid',
          'disabled',
          true
        );
      } else {
        this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_COMMUNITY_ADD_EDIT));
      }
      this.myFormElements = this.formElementControlService.setOptionsToInput(
        regions.elements,
        this.myFormElements,
        'region.uuid',
        'name'
      );
      this.myFormElements = this.formElementControlService.setOptionsToInput(
        districts.elements,
        this.myFormElements,
        'district.uuid',
        'name'
      );
    });
  }
}
