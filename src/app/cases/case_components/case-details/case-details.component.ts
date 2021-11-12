import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-details-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { TaskService } from '../../../_services/api/task.service';
import { SampleService } from '../../../_services/api/sample.service';
import { EventService } from '../../../_services/api/event.service';
import { CASE_DETAILS_FORM_ID } from '../../../app.constants';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
})
export class CaseDetailsComponent implements AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_DETAILS;
  formId = CASE_DETAILS_FORM_ID;
  case: CaseDataDto;

  public resourceService: BaseService<any>;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(
    private formElementControlService: FormElementControlService,
    public taskService: TaskService,
    public sampleService: SampleService,
    public eventService: EventService
  ) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const controlOverwrite = form.get('overwriteFollowUpUntil');
      const controlFollowUpUntil = form.get('followUpUntil');

      this.subscriptions.push(
        controlOverwrite.valueChanges.subscribe((val: boolean) => {
          if (val) {
            controlFollowUpUntil.enable();
          } else {
            controlFollowUpUntil.disable();
          }
        })
      );
    }
  }

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.case = caseItem;
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
    this.myFormElements = this.formElementControlService.setAttributeToFormElement(
      this.myFormElements,
      'followUpUntil',
      'disabled',
      !caseItem.overwriteFollowUpUntil
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
