import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CASE_EPIDEMIOLOGICAL_DATA_FORM_ID, SentResourceTypes } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import * as data from './case-epidemiological-form-data';

@Component({
  selector: 'app-case-epidemiological-data',
  templateUrl: './case-epidemiological-data.component.html',
  styleUrls: ['./case-epidemiological-data.component.scss'],
})
export class CaseEpidemiologicalDataComponent {
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_EPID_DETAILS;
  formId = CASE_EPIDEMIOLOGICAL_DATA_FORM_ID;
  subscription: Subscription = new Subscription();
  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    private sendResourceService: SendResourceService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    setTimeout(() => {
      this.sendResourceService.setResource(caseItem, SentResourceTypes.EPIDEMIOLOGICAL_DATA);
    });
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
