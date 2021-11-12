import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { RegionService } from '../../../_services/api/region.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './district-add-edit-form-data';
import { DistrictDto } from '../../../_models/districtDto';
import { DistrictService } from '../../../_services/api/district.service';

@Component({
  selector: 'app-district-add-edit',
  templateUrl: './district-add-edit.component.html',
  styleUrls: ['./district-add-edit.component.scss'],
})
export class DistrictAddEditComponent implements OnInit {
  @Input() selectedResource: DistrictDto;
  myFormElements: FormBase<any>[] = [];
  formId = 'districtAddEdit';

  constructor(
    public districtService: DistrictService,
    private regionService: RegionService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.regionService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_DISTRICT_ADD_EDIT))
          );
          this.myFormElements = this.formElementControlService.setAttributeToFormElement(
            this.myFormElements,
            'region.uuid',
            'disabled',
            true
          );
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_DISTRICT_ADD_EDIT));
        }
        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'region.uuid',
          'name'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}
