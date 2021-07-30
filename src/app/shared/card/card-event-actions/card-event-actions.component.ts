import { Component, Input } from '@angular/core';
import { ActionDto } from '../../../_models/models';

@Component({
  selector: 'app-card-event-actions',
  templateUrl: './card-event-actions.component.html',
  styleUrls: ['./card-event-actions.component.scss'],
})
export class CardEventActionsComponent {
  @Input() data: ActionDto;
}
