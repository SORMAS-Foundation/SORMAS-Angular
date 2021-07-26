import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
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
import { FormMultiselectComponent } from './components/form-multiselect/form-multiselect.component';
import { MaterialModule } from '../../material.module';
import { InpageNavModule } from '../inpage-nav/inpage-nav.module';
import { DirectivesModule } from '../../_directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    InpageNavModule,
    DirectivesModule,
  ],
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
    FormMultiselectComponent,
  ],
  exports: [DynamicFormComponent, FormMultiselectComponent],
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
