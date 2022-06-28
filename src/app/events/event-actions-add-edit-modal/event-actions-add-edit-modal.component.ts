import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './event-actions-add-edit-modal-form-data';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';
import { EventService } from '../../_services/api/event.service';
import { ActionDto } from '../../_models/actionDto';

@Component({
  selector: 'app-event-actions-add-edit-modal',
  templateUrl: './event-actions-add-edit-modal.component.html',
  styleUrls: ['./event-actions-add-edit-modal.component.scss'],
})
export class EventActionsAddEditModalComponent implements OnInit {
  @Input() selectedResource: ActionDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public eventService: EventService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_EVENT_ACTIONS_ADD_EDIT))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_EVENT_ACTIONS_ADD_EDIT));
    }
  }
}
