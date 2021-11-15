import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './district-add-edit-form-data';
import { DistrictDto } from '../../../_models/districtDto';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-district-add-edit',
  templateUrl: './district-add-edit.component.html',
  styleUrls: ['./district-add-edit.component.scss'],
})
export class DistrictAddEditComponent implements OnInit {
  @Input() selectedResource: DistrictDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(private formElementControlService: FormElementControlService) {}

  ngOnInit(): void {
    const config: any = data.FORM_DATA_DISTRICT_ADD_EDIT;
    if (this.selectedResource) {
      const section: any = config.find((s: any) => s.id === 'details');
      const field: any = section.fields.find((f: any) => f.widget === 'app-location-dropdowns');
      if (field) {
        field.widgetInfo.region.disabled = true;
      }
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_DISTRICT_ADD_EDIT))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_DISTRICT_ADD_EDIT));
    }
  }
}
