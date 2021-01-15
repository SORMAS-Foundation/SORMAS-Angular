import { Component } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-forms',
  templateUrl: './formExample.component.html',
  styleUrls: ['./formExample.component.scss'],
  providers: [FormDataService],
})
export class FormExampleComponent {
  myFormElements: FormElementBase<any>[] = [];

  constructor(service: FormDataService) {
    service.getFormData().subscribe({
      next: (value) => {
        this.myFormElements = value;
      },
    });
  }
}
