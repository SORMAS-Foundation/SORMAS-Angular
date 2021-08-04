import { Component, Input, OnInit } from '@angular/core';
import { HOUR_MINUTE_TIME_FORMAT } from '../../../_constants/common';

@Component({
  selector: 'app-card-treatments',
  templateUrl: './card-treatments.component.html',
  styleUrls: ['./card-treatments.component.scss'],
})
export class CardTreatmentsComponent implements OnInit {
  @Input() data: any;
  public drugInfo: string[];
  public prescription: string;

  hourMinuteTimeFormat = HOUR_MINUTE_TIME_FORMAT;

  ngOnInit(): void {
    this.drugInfo = this.data?.treatmentType.split(' - ');
    this.prescription = `${this.data?.dose} ${this.data?.treatmentRoute}`;
  }
}
