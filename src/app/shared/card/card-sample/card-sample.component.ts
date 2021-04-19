import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';
import { SampleDto } from '../../../_models/sampleDto';

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.scss'],
})
export class CardSampleComponent {
  @Input() data: SampleDto;
  dateCardType = DateCardType;
}
