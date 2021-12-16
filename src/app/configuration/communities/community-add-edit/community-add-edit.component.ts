import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CommunityDto } from '../../../_models/communityDto';
import * as data from './community-add-edit-form-data';
import { CommunityService } from '../../../_services/api/community.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-community-add-edit',
  templateUrl: './community-add-edit.component.html',
  styleUrls: ['./community-add-edit.component.scss'],
})
export class CommunityAddEditComponent implements OnInit {
  @Input() selectedResource: CommunityDto;
  myFormElements: FormBase<any>[] = [];
  selectedRegion = '';
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public communityService: CommunityService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
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
  }
}
