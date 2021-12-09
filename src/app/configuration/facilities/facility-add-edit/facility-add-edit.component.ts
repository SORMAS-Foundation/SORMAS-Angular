import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './facility-add-edit-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { FacilityDto } from '../../../_models/facilityDto';
import { FacilityService } from '../../../_services/api/facility.service';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-facility-add-edit',
  templateUrl: './facility-add-edit.component.html',
  styleUrls: ['./facility-add-edit.component.scss'],
})
export class FacilityAddEditComponent implements OnInit {
  @Input() selectedResource: FacilityDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

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
      this.disableField('region.uuid');
      this.disableField('district.uuid');
      this.disableField('community.uuid');
      this.disableField('facilityCategory');
      this.disableField('type');
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_FACILITY_ADD_EDIT));
    }
  }

  disableField(field: string): void {
    this.myFormElements = this.formElementControlService.setAttributeToFormElement(
      this.myFormElements,
      field,
      'disabled',
      true
    );
  }
}
