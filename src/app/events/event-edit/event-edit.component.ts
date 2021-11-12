import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './event-edit-form-data';
import { EventService } from '../../_services/api/event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_EVENT_EDIT;
  formId = 'eventEdit';

  constructor(public eventService: EventService) {}
}
