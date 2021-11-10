import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './facility-add-edit-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { FacilityDto } from '../../../_models/facilityDto';
import { FacilityService } from '../../../_services/api/facility.service';

@Component({
  selector: 'app-facility-add-edit',
  templateUrl: './facility-add-edit.component.html',
  styleUrls: ['./facility-add-edit.component.scss']
})
export class FacilityAddEditComponent implements OnInit {
  @Input() selectedResource: FacilityDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    public facilityService: FacilityService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_FACILITY_ADD_EDIT))
      );

      this.myFormElements = this.formElementControlService.setAttributeToFormElement(
        this.myFormElements,
        'facilityCategory',
        'disabled',
        true
      );
      this.myFormElements = this.formElementControlService.setAttributeToFormElement(
        this.myFormElements,
        'type',
        'disabled',
        true
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
      this.myFormElements = this.formElementControlService.setAttributeToFormElement(
        this.myFormElements,
        'community.uuid',
        'disabled',
        true
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_FACILITY_ADD_EDIT));
    }
  }
}
