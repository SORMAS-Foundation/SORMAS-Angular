import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { FORM_DATA_DATABASE_EXPORTS } from '../../../stats/exports/exports-form-data';

@Component({
  selector: 'app-exports-group-select',
  templateUrl: './exports-group-select.component.html',
  styleUrls: ['./exports-group-select.component.scss'],
})
export class ExportsGroupSelectComponent {
  config: FormElementBase<string>;
  group: FormGroup;
  dataForm = FORM_DATA_DATABASE_EXPORTS;

  selectAll(): void {
    this.updateFields('ALL');
  }

  selectAllSormas(): void {
    this.updateFields('SORMAS');
  }

  deselectAll(): void {
    this.updateFields();
  }

  updateFields(value?: string | undefined): void {
    this.dataForm.forEach((section) => {
      section.fields.forEach((field: FormElementBase<string>) => {
        if (field.controlType === 'checkbox') {
          const control = this.group.controls[field.key];
          let newValue = false;
          if (value) {
            newValue = value === 'SORMAS' ? section.id === 'dataSormas' : true;
          }
          control.setValue(newValue);
        }
      });
    });
  }

  export(): void {}
}
