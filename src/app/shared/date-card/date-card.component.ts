import { Component, Input } from '@angular/core';
import { DateCardType } from '../../_constants/enums';
import { DateCardAppearance } from '../../_models/dateCardAppearance';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.scss'],
})
export class DateCardComponent {
  @Input() date: Date;
  @Input() label: string;
  @Input() showDay = true;
  @Input() showMonth = true;
  @Input() showYear = true;
  @Input() appearance: DateCardAppearance = DateCardType.STANDARD;
}
