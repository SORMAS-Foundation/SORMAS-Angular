import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { EVENT_GROUP_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';
import { FORM_DATA_EVENT_GROUP_FILTERS } from '../event-group-filters/event-group-filters-form-data';

@Component({
  selector: 'app-event-groups',
  templateUrl: './event-groups.component.html',
  styleUrls: ['./event-groups.component.scss'],
})
export class EventGroupsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_EVENT_GROUP_FILTERS));
  formId = EVENT_GROUP_FILTERS_FORM_ID;
}
