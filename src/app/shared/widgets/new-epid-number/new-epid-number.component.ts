import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-new-epid-number',
  templateUrl: './new-epid-number.component.html',
  styleUrls: ['./new-epid-number.component.scss'],
})
export class NewEpidNumberComponent {
  config: FormElementBase<string>;
  group: FormGroup;

  generateEpidNumber(): void {
    this.group.patchValue({ epidNumber: 'test-epid-number' });
  }
}
