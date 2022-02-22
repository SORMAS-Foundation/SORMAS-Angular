import { Component } from '@angular/core';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-add-case-label',
  templateUrl: './add-case-label.component.html',
  styleUrls: ['./add-case-label.component.scss'],
})
export class AddCaseLabelComponent {
  config: FormElementBase<any>;
}
