import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';
import { ExposureDto } from '../../../_models/models';

@Component({
  selector: 'app-card-epid-data',
  templateUrl: './card-epid-data.component.html',
  styleUrls: ['./card-epid-data.component.scss'],
})
export class CardEpidDataComponent {
  @Input() data: ExposureDto;
  dateCardType = DateCardType;
}
