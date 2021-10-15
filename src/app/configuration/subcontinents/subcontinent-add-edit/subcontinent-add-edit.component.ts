import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './subcontinent-add-edit-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { SubcontinentDto } from '../../../_models/subcontinentDto';
import { SubcontinentService } from '../../../_services/api/subcontinent.service';

@Component({
  selector: 'app-subcontinent-add-edit',
  templateUrl: './subcontinent-add-edit.component.html',
  styleUrls: ['./subcontinent-add-edit.component.scss'],
})
export class SubcontinentAddEditComponent implements OnInit {
  @Input() selectedResource: SubcontinentDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    public subcontinentService: SubcontinentService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.subcontinentService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_SUBCONTINENT_ADD_EDIT))
          );
          this.myFormElements = this.formElementControlService.setAttributeToFormElement(
            this.myFormElements,
            'subcontinent.uuid',
            'disabled',
            true
          );
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_SUBCONTINENT_ADD_EDIT));
        }
        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'subcontinent.uuid',
          'defaultName'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}
