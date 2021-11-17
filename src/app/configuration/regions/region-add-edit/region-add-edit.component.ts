import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './region-add-edit-form-data';
import { RegionDto } from '../../../_models/regionDto';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-region-add-edit',
  templateUrl: './region-add-edit.component.html',
  styleUrls: ['./region-add-edit.component.scss'],
})
export class RegionAddEditComponent implements OnInit {
  @Input() selectedResource: RegionDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(private formElementControlService: FormElementControlService) {}

  ngOnInit(): void {
    const config: any = data.FORM_DATA_REGION_ADD_EDIT;
    const section: any = config.find((s: any) => s.id === 'details');
    const field: any = section.fields.find((f: any) => f.widget === 'app-location-dropdowns');
    if (this.selectedResource) {
      if (field) {
        field.widgetInfo.country.disabled = true;
      }
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(config))
      );
    } else {
      if (field) {
        field.widgetInfo.country.disabled = false;
      }
      this.myFormElements = JSON.parse(JSON.stringify(config));
    }
  }
}
