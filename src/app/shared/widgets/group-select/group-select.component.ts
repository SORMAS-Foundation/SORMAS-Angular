import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { EXPORT_TYPE } from '../../../app.constants';
import * as dataCase from '../../../cases/cases-list/export-configuration-form-data';
import * as dataTask from '../../../tasks/tasks-list/export-configuration-form-data';
import * as dataContact from '../../../contacts/contacts-list/export-configuration-form-data';
import * as dataEventParticipants from '../../../events/event/export-configuration-form-data';
import * as dataPerson from '../../../persons/persons-list/export-configuration-form-data';
import { FormBase, FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
})
export class GroupSelectComponent implements OnInit {
  config: FormElementBase<string>;
  group: UntypedFormGroup;
  dataForm: FormBase<any>[] = [];

  ngOnInit(): void {
    const exportType = this.group?.get('exportType')?.value;
    switch (exportType) {
      case EXPORT_TYPE.CASE:
        this.dataForm = dataCase.FORM_DATA_EXPORT_CONFIGURATION;
        break;
      case EXPORT_TYPE.TASK:
        this.dataForm = dataTask.FORM_DATA_EXPORT_CONFIGURATION;
        break;
      case EXPORT_TYPE.CONTACT:
        this.dataForm = dataContact.FORM_DATA_EXPORT_CONFIGURATION;
        break;
      case EXPORT_TYPE.EVENT_PARTICIPANTS:
        this.dataForm = dataEventParticipants.FORM_DATA_EXPORT_CONFIGURATION;
        break;
      case EXPORT_TYPE.PERSON:
        this.dataForm = dataPerson.FORM_DATA_EXPORT_CONFIGURATION;
        break;
      default:
    }
  }

  selectAll(): void {
    this.updateFields(true);
  }

  deselectAll(): void {
    this.updateFields(false);
  }

  updateFields(value: boolean): void {
    this.dataForm
      .filter((section) => this.config?.widgetInfo?.sections?.includes(section.id))
      .forEach((section) => {
        section.fields.forEach((field: FormElementBase<string>) => {
          if (field.controlType === 'checkbox') {
            this.group.controls[field.key.replaceAll('.', '__')]?.setValue(value);
          }
        });
      });
  }
}
