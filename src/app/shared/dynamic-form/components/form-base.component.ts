import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_DATA_BASE } from '../../../app.constants';
import { FormElementBase } from '../types/form-element-base';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-form-base',
  template: ``,
})
export class FormBaseComponent implements OnInit{
  config: FormElementBase<string> = {
    ...FORM_DATA_BASE,
  };
  group: FormGroup = new FormGroup({});
  initialValue: any;

  constructor(
    public formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    if (typeof this.group.controls[this.config.key] !== 'undefined') {
      this.initialValue = this.group.controls[this.config.key].value;
    }
  }

  get isValid(): boolean {
    return this.group.controls[this.config.key]?.valid;
  }

  onChange(): void {
    if (this.initialValue === this.group.controls[this.config.key].value) {
      this.formActionsService.setInputChange(false);
    } else {
      this.formActionsService.setInputChange(true);
    }
  }
}
