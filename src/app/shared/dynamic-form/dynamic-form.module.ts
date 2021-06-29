import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
import { SharedModule } from '../shared.module';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormNullComponent } from './components/form-null/form-null.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormWidgetComponent } from './components/form-widget/form-widget.component';
import { FormDatetimeComponent } from './components/form-datetime/form-datetime.component';
import { DatepickerHeaderTodayComponent } from './components/datepicker-header-today/datepicker-header-today.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputComponent,
    FormDateComponent,
    FormDatetimeComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextareaComponent,
    FormNullComponent,
    FormNumberComponent,
    FormWidgetComponent,
    DatepickerHeaderTodayComponent,
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormDateComponent,
    FormDatetimeComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextareaComponent,
    FormNullComponent,
    FormNumberComponent,
    FormWidgetComponent,
  ],
})
export class DynamicFormModule {}
