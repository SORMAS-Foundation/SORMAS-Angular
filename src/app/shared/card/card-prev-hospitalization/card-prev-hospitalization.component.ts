import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../app.constants';
import { PreviousHospitalizationDto } from '../../../_models/previousHospitalizationDto';

@Component({
  selector: 'app-card-prev-hospitalization',
  templateUrl: './card-prev-hospitalization.component.html',
  styleUrls: ['./card-prev-hospitalization.component.scss'],
})
export class CardPrevHospitalizationComponent {
  @Input() data: PreviousHospitalizationDto;
  dateCardType = DateCardType;
}
