import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';
import * as FormData from './form-data.json';

@Injectable()
export class FormDataService {
  // TODO: get JSON from from API
  getFormData = () => {
    const formData: FormElementBase<string>[] = (FormData as any)?.default;
    return of(formData.sort((a, b) => a.order - b.order));
  };
}
