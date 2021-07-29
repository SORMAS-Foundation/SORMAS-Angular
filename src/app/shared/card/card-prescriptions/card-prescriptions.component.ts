import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prescriptions',
  templateUrl: './card-prescriptions.component.html',
  styleUrls: ['./card-prescriptions.component.scss'],
})
export class CardPrescriptionsComponent implements OnInit {
  @Input() data: any;
  public drugInfo: string[];
  public date: Date;
  public prescription: string;
  public startDate: Date;
  public endDate: Date;

  ngOnInit(): void {
    this.drugInfo = this.data?.prescriptionType.split(' - ');
    this.date = new Date(this.data?.prescriptionDate);
    this.prescription = `${this.data?.dose} ${this.data?.prescriptionRoute} ${this.data?.frequency}`;
    this.startDate = new Date(this.data?.prescriptionPeriod?.start);
    this.endDate = new Date(this.data?.prescriptionPeriod?.end);
  }
}
