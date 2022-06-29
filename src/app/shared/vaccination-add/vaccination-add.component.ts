import { Component } from '@angular/core';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { ADD_EDIT_FORM_ID } from '../../app.constants';
import { FORM_DATA_VACCINATION_ADD } from './vaccination-add-form-data';
import { VaccinationService } from '../../_services/api/vaccination.service';

@Component({
  selector: 'app-vaccination-add',
  templateUrl: './vaccination-add.component.html',
  styleUrls: ['./vaccination-add.component.scss'],
})
export class VaccinationAddComponent {
  myFormElements: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_VACCINATION_ADD));
  formId = ADD_EDIT_FORM_ID;

  constructor(public vaccinationService: VaccinationService) {}
}
