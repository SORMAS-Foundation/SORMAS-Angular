import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

@Injectable()
export class FormElementControlService {
  toFormGroup = (formElements: FormElementBase<string>[]) => {
    const group: any = {};
    let validations: ValidatorFn[] = [];
    // TODO : Extract the validation logic in separate ts
    formElements.forEach((formElement) => {
      if (formElement.validation?.includes('required')) {
        validations.push(Validators.required);
      }
      if (formElement.validation?.includes('email')) {
        validations.push(Validators.email);
      }
      if (formElement.validation?.includes('age')) {
        validations.push(Validators.max(100));
      }
      if (formElement.validation?.includes('password')) {
        validations.push(Validators.minLength(8));
      }
      group[formElement.key] =
        validations.length > 0
          ? (group[formElement.key] = new FormControl(formElement.value || '', validations))
          : (group[formElement.key] = new FormControl(formElement.value || ''));
      validations = [];
    });
    return new FormGroup(group);
  };
}
