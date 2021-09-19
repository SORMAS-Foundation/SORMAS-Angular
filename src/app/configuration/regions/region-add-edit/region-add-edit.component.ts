import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './region-add-edit-form-data';
import { RegionDto } from '../../../_models/regionDto';
import { RegionService } from '../../../_services/api/region.service';
import { CountryService } from '../../../_services/api/country.service';

@Component({
  selector: 'app-region-add-edit',
  templateUrl: './region-add-edit.component.html',
  styleUrls: ['./region-add-edit.component.scss'],
})
export class RegionAddEditComponent implements OnInit {
  @Input() selectedResource: RegionDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    private countryService: CountryService,
    public regionService: RegionService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.countryService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_REGION_ADD_EDIT))
          );
          this.myFormElements = this.formElementControlService.setAttributeToFormElement(
            this.myFormElements,
            'country.uuid',
            'disabled',
            true
          );
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_REGION_ADD_EDIT));
        }
        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'country.uuid',
          'defaultName'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}
