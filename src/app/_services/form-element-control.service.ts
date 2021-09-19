import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormBase, FormElementBase } from '../shared/dynamic-form/types/form-element-base';
import { Resource } from '../_models/resource';

const MAX_AGE = 100;
const MIN_PASS_LENGTH = 8;

@Injectable({
  providedIn: 'root',
})
export class FormElementControlService {
  toFormGroup = (formElements: FormElementBase<string>[]) => {
    const group: { [key: string]: FormControl } = {};
    let validations: ValidatorFn[] = [];
    formElements.forEach((formElement) => {
      if (formElement.validation) {
        validations = this.getValidators(formElement.validation);
      }
      group[formElement.key] =
        validations.length > 0
          ? (group[formElement.key] = new FormControl(
              { value: formElement.value || '', disabled: formElement.disabled },
              validations
            ))
          : (group[formElement.key] = new FormControl({
              value: formElement.value || '',
              disabled: formElement.disabled,
            }));
      validations = [];
    });
    return new FormGroup(group);
  };

  setValuesForDynamicForm(resource: Resource, formElements: FormBase<any>[]): FormBase<any>[] {
    formElements.forEach((formElement) => {
      formElement.fields.forEach((field) => {
        if (field.key.includes('.')) {
          const getProp = (obj: any, prop: any) => {
            return prop.split('.').reduce((r: any, e: any) => {
              return r && r[e];
            }, obj);
          };
          // eslint-disable-next-line no-param-reassign
          field.value = getProp(resource, field.key);
        } else {
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          field.value = resource[field.key];
        }
      });
    });

    return formElements;
  }

  getValidators(validators: string[]): ValidatorFn[] {
    const validatorsArray = [];

    if (validators.includes('required')) {
      validatorsArray.push(Validators.required);
    }
    if (validators.includes('requiredTrue')) {
      validatorsArray.push(Validators.requiredTrue);
    }
    if (validators.includes('email')) {
      validatorsArray.push(Validators.email);
    }
    if (validators.includes('age')) {
      validatorsArray.push(Validators.max(MAX_AGE));
    }
    if (validators.includes('password')) {
      validatorsArray.push(Validators.minLength(MIN_PASS_LENGTH));
    }

    return validatorsArray;
  }

  setOptionsToInput(
    options: any[],
    formElements: FormBase<any>[],
    optionKey: string,
    optionValue: string
  ): FormBase<any>[] {
    const newOptions = options.map((option) => {
      return {
        key: option.uuid,
        value: option[optionValue],
      };
    });

    formElements.forEach((formElement) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      formElement.fields.find((elem) => elem.key === optionKey).options = newOptions;
    });

    return formElements;
  }

  setAttributeToFormElement(
    formElements: FormBase<any>[],
    key: string,
    attribute: string,
    value: any
  ): FormBase<any>[] {
    formElements.forEach((formElement) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      formElement.fields.find((elem) => elem.key === key)[attribute] = value;
    });

    return formElements;
  }

  setAttributeToGroupElement(
    formElements: FormBase<any>[],
    id: string,
    attribute: string,
    value: any
  ): FormBase<any>[] {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    formElements.find((formElement) => formElement.id === id)[attribute] = value;

    return formElements;
  }
}
