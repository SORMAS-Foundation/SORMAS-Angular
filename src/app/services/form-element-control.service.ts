import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

@Injectable()
export class FormElementControlService {
  toFormGroup = (formElements: FormElementBase<string>[]) => {
    const group: any = {};

    formElements.forEach((formElement) => {
      group[formElement.key] = formElement.required
        ? new FormControl(formElement.value || '', Validators.required)
        : new FormControl(formElement.value || '');
    });
    return new FormGroup(group);
  };
}
