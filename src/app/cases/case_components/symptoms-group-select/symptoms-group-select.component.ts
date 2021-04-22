import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../../shared/dynamic-form/types/form-element-base';
// eslint-disable-next-line import/no-cycle
import * as data from '../case-symptoms/case-symptoms-form-data';

@Component({
  selector: 'app-symptoms-group-select',
  templateUrl: './symptoms-group-select.component.html',
  styleUrls: ['./symptoms-group-select.component.scss'],
})
export class SymptomsGroupSelectComponent {
  config: FormElementBase<string>;
  group: FormGroup;
  dataForm = data.FORM_DATA_CASE_SYMPTOMS;

  setAllClear(): void {
    this.updateSymptoms(undefined);
  }

  setAllNo(): void {
    this.updateSymptoms('NO');
  }

  setAllUnknown(): void {
    this.updateSymptoms('UNKNOWN');
  }

  updateSymptoms(value: string | undefined): void {
    this.dataForm.forEach((section) => {
      section.fields.forEach((field: FormElementBase<string>) => {
        if (field.controlType === 'radio') {
          const control = this.group.controls[field.key];
          control?.patchValue(value);
        }
      });
    });
  }
}
