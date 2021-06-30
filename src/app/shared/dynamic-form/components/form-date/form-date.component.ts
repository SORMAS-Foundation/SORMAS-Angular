import { Component } from '@angular/core';
import { DatepickerHeaderTodayComponent } from '../datepicker-header-today/datepicker-header-today.component';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent extends FormBaseComponent {
  header = DatepickerHeaderTodayComponent;
}
