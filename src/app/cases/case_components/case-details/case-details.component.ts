import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-details-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { TaskService } from '../../../_services/api/task.service';
import { SampleService } from '../../../_services/api/sample.service';
import { EventService } from '../../../_services/api/event.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
})
export class CaseDetailsComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_DETAILS;
  case: CaseDataDto;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    public taskService: TaskService,
    public sampleService: SampleService,
    public eventService: EventService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.case = caseItem;
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
