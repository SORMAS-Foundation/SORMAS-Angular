import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FORM_DATA_BASE } from '../../../app.constants';
import { FormElementBase } from '../types/form-element-base';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-form-base',
  template: ``,
})
export class FormBaseComponent implements OnInit {
  config: FormElementBase<any> = {
    ...FORM_DATA_BASE,
  };
  group: UntypedFormGroup = new UntypedFormGroup({});
  formId: string;
  initialValue: any;
  control: any;

  constructor(public formActionsService: FormActionsService) {}

  ngOnInit(): void {
    this.control = this.group.controls[this.config.key];
    if (typeof this.control !== 'undefined') {
      this.initialValue = this.control.value;
    }
  }

  get isValid(): boolean {
    return this.control?.valid;
  }

  onChange(): void {
    if (typeof this.control !== 'undefined') {
      this.formActionsService.setInputChange(
        this.formId,
        this.config.key,
        this.initialValue !== this.control.value
      );
    }
  }
}
