import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormDataService } from '../services/form-data.service';
import {FormBase, FormElementBase} from '../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-forms',
  templateUrl: './formExample.component.html',
  styleUrls: ['./formExample.component.scss'],
  providers: [FormDataService],
})
export class FormExampleComponent implements OnDestroy {
  myFormElements: FormBase<any>[] = [];
  subscription: Subscription = new Subscription();
  constructor(service: FormDataService) {
    // this.subscription = service.getFormData().subscribe({
    //   next: (value) => {
    //     this.myFormElements = value;
    //   },
    // });
  }

  ngOnDestroy = () => {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  };
}
