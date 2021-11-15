import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './country-add-edit-form-data';
import { CountryService } from '../../../_services/api/country.service';
import { CountryDto } from '../../../_models/countryDto';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-country-add-edit',
  templateUrl: './country-add-edit.component.html',
  styleUrls: ['./country-add-edit.component.scss'],
})
export class CountryAddEditComponent implements OnInit {
  @Input() selectedResource: CountryDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public countryService: CountryService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_COUNTRY_ADD_EDIT))
      );

      this.myFormElements = this.formElementControlService.setAttributeToFormElement(
        this.myFormElements,
        'subcontinent.uuid',
        'disabled',
        true
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_COUNTRY_ADD_EDIT));
    }
  }
}
