import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-treatments',
  templateUrl: './card-treatments.component.html',
  styleUrls: ['./card-treatments.component.scss'],
})
export class CardTreatmentsComponent implements OnInit {
  @Input() data: any;
  public drugInfo: string[];
  public time: string;
  public prescription: string;

  ngOnInit(): void {
    this.drugInfo = this.data?.treatmentType.split(' - ');
    const date = new Date(this.data?.treatmentDateTime);
    this.time = `${date.getHours()}:${date.getMinutes()}`;
    this.prescription = `${this.data?.dose} ${this.data?.treatmentRoute}`;
  }
}
