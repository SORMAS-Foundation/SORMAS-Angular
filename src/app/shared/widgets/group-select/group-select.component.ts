import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { FORM_DATA_EXPORT_CONFIGURATION } from '../../../cases/export-configuration/export-configuration-form-data';

@Component({
  selector: 'app-group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
})
export class GroupSelectComponent {
  config: FormElementBase<string>;
  group: FormGroup;
  dataForm = FORM_DATA_EXPORT_CONFIGURATION;

  selectAll(): void {
    this.updateFields(true);
  }

  deselectAll(): void {
    this.updateFields(false);
  }

  updateFields(value: boolean): void {
    this.dataForm
      .filter((section) => section.id !== 'export')
      .forEach((section) => {
        section.fields.forEach((field: FormElementBase<string>) => {
          if (field.controlType === 'checkbox') {
            this.group.controls[field.key]?.setValue(value);
          }
        });
      });
  }
}
