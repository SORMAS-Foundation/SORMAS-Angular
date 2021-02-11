import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../types/form-element-base';

@Component({
  selector: 'app-form-base',
  template: ``,
})
export class FormBaseComponent {
  config: FormElementBase<string> = {
    controlType: '',
    key: '',
    label: '',
    options: [],
    order: 0,
    validation: [],
    type: '',
    value: '',
  };
  group: FormGroup = new FormGroup({});

  get isValid(): boolean {
    return this.group.controls[this.config.key].valid;
  }
}
