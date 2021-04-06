import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_DATA_BASE } from '../../../app.constants';
import { FormElementBase } from '../types/form-element-base';

@Component({
  selector: 'app-form-base',
  template: ``,
})
export class FormBaseComponent {
  config: FormElementBase<string> = {
    ...FORM_DATA_BASE,
  };
  group: FormGroup = new FormGroup({});

  get isValid(): boolean {
    return this.group.controls[this.config.key]?.valid;
  }
}
