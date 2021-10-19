import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { PointOfEntryDto } from '../../../_models/pointOfEntryDto';
import * as data from './entry-points-add-edit-form-data';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';

@Component({
  selector: 'app-entry-points-add-edit',
  templateUrl: './entry-points-add-edit.component.html',
  styleUrls: ['./entry-points-add-edit.component.scss'],
})
export class EntryPointsAddEditComponent implements OnInit {
  @Input() selectedResource: PointOfEntryDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    public entryPointService: EntryPointService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.entryPointService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_ENTRY_POINTS_ADD_EDIT))
          );
          this.myFormElements = this.formElementControlService.setAttributeToFormElement(
            this.myFormElements,
            'uuid',
            'disabled',
            true
          );
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_ENTRY_POINTS_ADD_EDIT));
        }
        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'uuid',
          'defaultName'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}
