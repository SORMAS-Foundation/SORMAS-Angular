import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElementBase } from './types/form-element-base';

@Component({
  selector: 'app-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss'],
})
export class DynamicFormGroupComponent {
  @Input() formElement: FormElementBase<string> = {
    controlType: '',
    key: '',
    label: '',
    options: [],
    order: 0,
    validation: [],
    type: '',
    value: '',
  };
  @Input() form: FormGroup;
  constructor(fg: FormBuilder) {
    this.form = fg.group({
      title: fg.control('initial value', Validators.required),
    });
  }
  get isValid(): boolean {
    return this.form.controls[this.formElement.key].valid;
  }
}
