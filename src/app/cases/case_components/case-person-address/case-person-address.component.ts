import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-case-person-address',
  templateUrl: './case-person-address.component.html',
  styleUrls: ['./case-person-address.component.scss'],
})
export class CasePersonAddressComponent {
  config: FormElementBase<string>;
  group: FormGroup;

  generateEpidNumber(): void {
    console.log('generate epid number');
    // this.group.setValue();
    console.log(this.config);
  }
}
