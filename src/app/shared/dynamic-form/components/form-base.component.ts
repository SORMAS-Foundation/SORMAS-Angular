import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_DATA_BASE } from '../../../app.constants';
import { FormElementBase } from '../types/form-element-base';
import { TriggerSaveFormService } from '../../../_services/trigger-save-form.service';

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
    public triggerSaveFormService: TriggerSaveFormService
  ) {}

  ngOnInit(): void {
    this.initialValue = this.group.controls[this.config.key].value;
  }

  get isValid(): boolean {
    return this.group.controls[this.config.key]?.valid;
  }

  onChange(): void {
    if (this.initialValue === this.group.controls[this.config.key].value) {
      this.triggerSaveFormService.setInputChange(false);
    } else {
      this.triggerSaveFormService.setInputChange(true);
    }
  }
}
