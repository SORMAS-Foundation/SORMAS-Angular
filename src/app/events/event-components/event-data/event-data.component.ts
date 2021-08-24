import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './event-data-form-data';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { EventService } from '../../../_services/api/event.service';
import { EventDto } from '../../../_models/eventDto';
import { SampleService } from '../../../_services/api/sample.service';
import { ContactService } from '../../../_services/api/contact.service';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: ['./event-data.component.scss'],
})
export class EventDataComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_EVENT_ADD;
  event: EventDto;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public eventService: EventService,
    public sampleService: SampleService,
    public contactService: ContactService,
  ) {}

  updateComponent(eventItem: EventDto, resourceService: BaseService<any>): void {
    this.event = eventItem;
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      eventItem,
      this.formData
    );
  }
}
