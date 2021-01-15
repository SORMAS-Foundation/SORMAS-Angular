import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

@Injectable()
export class FormDataService {
  // TODO: get JSON from from API
  getFormData = () => {
    const formData: FormElementBase<string>[] = [
      {
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 1,
        required: true,
        controlType: 'dropdown',
        type: 'simple',
      },
      {
        key: 'active',
        label: 'State',
        value: 'true',
        type: '',
        order: 2,
        required: false,
        controlType: 'checkbox',
        options: [],
      },
      {
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto1111',
        required: true,
        order: 3,
        controlType: 'textbox',
        options: [],
        type: 'text',
      },
      {
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4,
        required: true,
        controlType: 'textbox',
        options: [],
        value: 'fff',
      },
    ];

    return of(formData.sort((a, b) => a.order - b.order));
  };
}
