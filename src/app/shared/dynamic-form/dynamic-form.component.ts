import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElementControlService } from '../../services/form-element-control.service';
import { FormElementBase } from './types/form-element-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FormElementControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() formElements: FormElementBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormElementControlService, form: FormBuilder) {
    this.form = form.group({
      title: form.control('initial value', Validators.required),
    });
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.formElements);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
