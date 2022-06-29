import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormElementBase } from '../types/form-element-base';
import { FormFields } from '../types/form-fields';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormDateComponent } from './form-date/form-date.component';

import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FORM_DATA_BASE } from '../../../app.constants';
import { FormNullComponent } from './form-null/form-null.component';
import { FormNumberComponent } from './form-number/form-number.component';
import { FormWidgetComponent } from './form-widget/form-widget.component';
import { FormDatetimeComponent } from './form-datetime/form-datetime.component';
import { FormMultiselectComponent } from './form-multiselect/form-multiselect.component';
import { FormSearchboxComponent } from './form-searchbox/form-searchbox.component';
import { FormEdittextareaComponent } from './form-edittextarea/form-edittextarea.component';

const components: FormFields = {
  input: FormInputComponent,
  searchbox: FormSearchboxComponent,
  checkbox: FormCheckboxComponent,
  radio: FormRadioComponent,
  dropdown: FormSelectComponent,
  multidropdown: FormMultiselectComponent,
  date: FormDateComponent,
  datetime: FormDatetimeComponent,
  textarea: FormTextareaComponent,
  edittextarea: FormEdittextareaComponent,
  null: FormNullComponent,
  number: FormNumberComponent,
  widget: FormWidgetComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: FormElementBase<string> = {
    ...FORM_DATA_BASE,
  };
  @Input() group: UntypedFormGroup = new UntypedFormGroup({});
  @Input() formId: string;
  component: any;

  constructor(private container: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.container.createComponent(components[this.config.controlType]);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.formId = this.formId;
  }
}
