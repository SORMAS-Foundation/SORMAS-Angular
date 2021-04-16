import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';
import { EventDto } from '../../../_models/eventDto';

@Component({
  selector: 'app-card-case-event',
  templateUrl: './card-case-event.component.html',
  styleUrls: ['./card-case-event.component.scss'],
})
export class CardCaseEventComponent {
  @Input() data: EventDto;
  dateCardType = DateCardType;
}
