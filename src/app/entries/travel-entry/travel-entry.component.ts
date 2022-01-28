import { Component } from '@angular/core';
import { ENTRY_DETAILS_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { BaseService } from '../../_services/api/base.service';
import { TravelEntryService } from '../../_services/api/travel-entry-service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import * as data from './entry-form-data';

@Component({
  selector: 'app-travel-entry',
  templateUrl: './travel-entry.component.html',
  styleUrls: ['./travel-entry.component.scss'],
})
export class TravelEntryComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_ENTRY;
  formId = ENTRY_DETAILS_FORM_ID;
  entry: TravelEntryDto;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public entryService: TravelEntryService
  ) {}

  updateComponent(entryItem: TravelEntryDto, resourceService: BaseService<any>): void {
    this.entry = entryItem;
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      entryItem,
      this.formData
    );
  }
}
