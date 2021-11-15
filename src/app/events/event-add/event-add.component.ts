import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './event-add-form-data';
import { EventService } from '../../_services/api/event.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss'],
})
export class EventAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_EVENT_ADD;
  formId = ADD_EDIT_FORM_ID;

  constructor(public eventService: EventService) {}
}
