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

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputComponent,
    FormDateComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormDateComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
  ],
})
export class DynamicFormModule {}
