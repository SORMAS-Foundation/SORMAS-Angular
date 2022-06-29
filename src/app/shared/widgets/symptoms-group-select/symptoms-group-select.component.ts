import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FORM_DATA_FOLLOW_UP_VISIT_ADD } from '../../follow-up-visit-add/follow-up-visit-add-data';
import { FORM_DATA_CLINICAL_COURSE_ADD } from '../../../cases/case_components/clinical-course-add/clinical-course-add-form-data';
import { FORM_DATA_CASE_SYMPTOMS } from '../../../cases/case_components/case-symptoms/case-symptoms-form-data';

@Component({
  selector: 'app-symptoms-group-select',
  templateUrl: './symptoms-group-select.component.html',
  styleUrls: ['./symptoms-group-select.component.scss'],
})
export class SymptomsGroupSelectComponent implements OnInit {
  config: FormElementBase<string>;
  group: FormGroup;
  formId: string;
  data: any;

  constructor(private formActionsService: FormActionsService) {}

  ngOnInit(): void {
    switch (this.config?.widgetInfo?.type) {
      case 'SYMPTOMS':
        this.data = FORM_DATA_CASE_SYMPTOMS;
        break;
      case 'CLINICAL_COURSE':
        this.data = FORM_DATA_CLINICAL_COURSE_ADD;
        break;
      case 'FOLLOW_UP_VISIT':
        this.data = FORM_DATA_FOLLOW_UP_VISIT_ADD;
        break;
      default:
        this.data = [];
        break;
    }
  }

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
    this.data.forEach((section: any) => {
      section.fields.forEach((field: any) => {
        if (field.controlType === 'radio' && field.key.includes('symptoms')) {
          const control = this.group.controls[field.key.replace('.', '__')];
          if (value) {
            if (!control.value) {
              control.setValue(value);
            }
          } else {
            control.reset();
          }
          this.formActionsService.setInputChange(this.formId, field.key, true);
        }
      });
    });
  }
}
