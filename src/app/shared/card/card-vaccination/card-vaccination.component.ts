import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';

@Component({
  selector: 'app-card-vaccination',
  templateUrl: './card-vaccination.component.html',
  styleUrls: ['./card-vaccination.component.scss'],
})
export class CardVaccinationComponent {
  @Input() data: any;
  dateCardType = DateCardType;
}
