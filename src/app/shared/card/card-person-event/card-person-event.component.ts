import { Component, Input } from '@angular/core';
import { EventStatusOptionsEdit } from '../../../_constants/enums';
import { EventStatusIcons } from '../../../_constants/icons';
import { EventDto } from '../../../_models/eventDto';

@Component({
  selector: 'app-card-person-event',
  templateUrl: './card-person-event.component.html',
  styleUrls: ['./card-person-event.component.scss']
})
export class CardPersonEventComponent {
  @Input() data: EventDto;
  eventStatus = EventStatusOptionsEdit;
  eventStatusIcons = EventStatusIcons;
}
