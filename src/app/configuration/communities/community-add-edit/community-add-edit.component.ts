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
    if (this.selectedResource) {
      const config: any = data.FORM_DATA_COMMUNITY_ADD_EDIT;
      const section: any = config.find((s: any) => s.id === 'details');
      const field: any = section.fields.find((f: any) => f.widget === 'app-location-dropdowns');
      if (field) {
        field.widgetInfo.region.disabled = true;
        field.widgetInfo.district.disabled = true;
      }
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(config))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_COMMUNITY_ADD_EDIT));
    }
  }
}
