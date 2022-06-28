import { Component, Input } from '@angular/core';
import { ActionDto } from "../../../_models/actionDto";

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
})
export class CardActionComponent {
  @Input() data: ActionDto;
}
