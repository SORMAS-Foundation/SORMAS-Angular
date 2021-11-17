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
    const section: any = data.FORM_DATA_FACILITY_ADD_EDIT.find((s: any) => s.id === 'location');
    const field: any = section.fields.find((f: any) => f.widget === 'app-location-dropdowns');
    if (this.selectedResource) {
      if (field) {
        field.widgetInfo.region.disabled = true;
        field.widgetInfo.district.disabled = true;
        field.widgetInfo.community.disabled = true;
      }
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
    } else {
      if (field) {
        field.widgetInfo.region.disabled = false;
        field.widgetInfo.district.disabled = false;
        field.widgetInfo.community.disabled = false;
      }
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_FACILITY_ADD_EDIT));
    }
  }
}
