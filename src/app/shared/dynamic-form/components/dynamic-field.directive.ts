import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../types/form-element-base';
import { FormFields } from '../types/form-fields';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormDateComponent } from './form-date/form-date.component';

import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';

const components: FormFields = {
  input: FormInputComponent,
  checkbox: FormCheckboxComponent,
  radio: FormRadioComponent,
  dropdown: FormSelectComponent,
  date: FormDateComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: FormElementBase<string> = {
    controlType: '',
    key: '',
    label: '',
    options: [],
    order: 0,
    validation: [],
    type: '',
    value: '',
    newLine: false,
  };
  @Input() group: FormGroup = new FormGroup({});
  component: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit(): void {
    const component = components[this.config.controlType];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
