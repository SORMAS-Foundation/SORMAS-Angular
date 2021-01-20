import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as FormData from '../../assets/form-data.json';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // TODO: get JSON from from API
  getFormData = () => {
    const formData: FormElementBase<string>[] = (FormData as any)?.default;
    return of(formData.sort((a, b) => a.order - b.order));
  };
}
