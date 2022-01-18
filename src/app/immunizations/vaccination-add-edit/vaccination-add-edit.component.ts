import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ContinentDto } from '../../_models/continentDto';
import * as data from './vaccination-add-edit-form-data';
import { ContinentService } from '../../_services/api/continent.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-vaccination-add-edit',
  templateUrl: './vaccination-add-edit.component.html',
  styleUrls: ['./vaccination-add-edit.component.scss'],
})
export class VaccinationAddEditComponent implements OnInit {
  @Input() selectedResource: ContinentDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public continentService: ContinentService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_VACCINATION_ADD_EDIT))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_VACCINATION_ADD_EDIT));
    }
  }
}
