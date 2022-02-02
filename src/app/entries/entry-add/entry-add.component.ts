import { Component, Input, OnInit } from '@angular/core';
import { ADD_EDIT_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { TravelEntryService } from '../../_services/api/travel-entry-service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import * as data from './entry-add-form-data';

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.scss'],
})
export class EntryAddComponent implements OnInit {
  @Input() selectedResource: TravelEntryDto;
  public formData: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public travelEntryService: TravelEntryService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.formData = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_ENTRY_ADD))
      );
    } else {
      this.formData = JSON.parse(JSON.stringify(data.FORM_DATA_ENTRY_ADD));
    }
  }
}
