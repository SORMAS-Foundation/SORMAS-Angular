import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './event-add-form-data';
import { EventService } from '../../_services/api/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss'],
})
export class EventAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_EVENT_ADD;

  constructor(public eventService: EventService) {}
}
