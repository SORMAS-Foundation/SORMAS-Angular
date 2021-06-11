import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { FormActionsService } from '../../../_services/form-actions.service';
import * as data from '../../../cases/case_components/case-symptoms/case-symptoms-form-data';

@Component({
  selector: 'app-symptoms-group-select',
  templateUrl: './symptoms-group-select.component.html',
  styleUrls: ['./symptoms-group-select.component.scss'],
})
export class SymptomsGroupSelectComponent {
  config: FormElementBase<string>;
  group: FormGroup;
  dataForm = data.FORM_DATA_CASE_SYMPTOMS;

  constructor(private formActionsService: FormActionsService) {}

  setAllClear(): void {
    this.updateSymptoms('');
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
          const changed = control.value !== value;
          control?.patchValue(value);
          this.formActionsService.setInputChange(field.key, changed);
        }
      });
    });
  }
}
