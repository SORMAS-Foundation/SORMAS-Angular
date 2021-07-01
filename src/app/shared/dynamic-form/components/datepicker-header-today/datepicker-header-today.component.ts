import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-header-today',
  templateUrl: './datepicker-header-today.component.html',
  styleUrls: ['./datepicker-header-today.component.scss'],
})
export class DatepickerHeaderTodayComponent<D> {
  constructor(
    private _datePicker: MatDatepicker<D>,
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>
  ) {}

  setDefaultDate(): void {
    const today = this._dateAdapter.today();
    this._calendar.activeDate = today;
    this._datePicker.select(today);
    this._datePicker.close();
  }
}
