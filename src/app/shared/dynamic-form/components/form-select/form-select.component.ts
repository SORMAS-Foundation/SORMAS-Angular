import { Component } from '@angular/core';
import { FormLazyOptionsBaseComponent } from '../form-lazy-options-base.component';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent extends FormLazyOptionsBaseComponent {}
