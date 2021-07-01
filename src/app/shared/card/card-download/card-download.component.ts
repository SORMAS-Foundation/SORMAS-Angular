import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';

@Component({
  selector: 'app-card-download',
  templateUrl: './card-download.component.html',
  styleUrls: ['./card-download.component.scss'],
})
export class CardDownloadComponent {
  @Input() data: any;
  dateCardType = DateCardType;
}
