import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { FORM_DATA_CLINICAL_COURSE_ADD } from '../../../cases/case_components/clinical-course-add/clinical-course-add-form-data';

@Component({
  selector: 'app-clinical-course-group-select',
  templateUrl: './clinical-course-group-select.component.html',
  styleUrls: ['./clinical-course-group-select.component.scss'],
})
export class ClinicalCourseGroupSelectComponent {
  config: FormElementBase<string>;
  group: UntypedFormGroup;
  dataForm = FORM_DATA_CLINICAL_COURSE_ADD;

  clearAll(): void {
    this.updateFields();
  }

  setClearToNo(): void {
    this.updateFields('NO');
  }

  setClearToUnknown(): void {
    this.updateFields('UNKNOWN');
  }

  updateFields(value?: string | undefined): void {
    this.dataForm.forEach((section) => {
      section.fields.forEach((field: any) => {
        if (field.controlType === 'radio') {
          const control = this.group.controls[field.key];
          if (value) {
            if (!control.value) {
              control.setValue(value);
            }
          } else {
            control.reset();
          }
        }
      });
    });
  }

  export(): void {}
}
