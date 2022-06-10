import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import * as data from '../../../cases/case_components/case-follow-up-add-visit/case-follow-up-add-visit-data';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-add-visits-group-select',
  templateUrl: './add-visits-group-select.component.html',
  styleUrls: ['./add-visits-group-select.component.scss'],
})
export class AddVisitsGroupSelectComponent {
  config: FormElementBase<string>;
  group: FormGroup;
  formId: string;
  dataForm = data.FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS;

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
      section.fields.forEach((field: FormElementBase<any>) => {
        if (field.controlType === 'radio') {
          const control = this.group.controls[field.key];
          const changed = control.value !== value;
          control?.patchValue(value);
          this.formActionsService.setInputChange(this.formId, field.key, changed);
        }
      });
    });
  }
}
