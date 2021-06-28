import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent extends FormBaseComponent {
  @ViewChild('picker', { static: false }) datepicker: MatDatepicker<any>;

  setDefaultDate(): void {
    this.datepicker.select(new Date());
  }
}
