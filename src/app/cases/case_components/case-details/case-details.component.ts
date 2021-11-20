import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { HelperService } from '../../../_services/helper.service';
import { RegionService } from '../../../_services/api/region.service';
import { DistrictService } from '../../../_services/api/district.service';
import { CommunityService } from '../../../_services/api/community.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
})
export class CaseDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData: FormBase<any>[] = data.FORM_DATA_CASE_DETAILS;
  formId = CASE_DETAILS_FORM_ID;
  case: CaseDataDto;

  public resourceService: BaseService<any>;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(
    private formElementControlService: FormElementControlService,
    public taskService: TaskService,
    public sampleService: SampleService,
    public eventService: EventService,
    protected regionService: RegionService,
    protected districtService: DistrictService,
    protected communityService: CommunityService,
    protected helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.formData.forEach((section) => {
      section?.fields.forEach((field) => {
        if (field.service) {
          // eslint-disable-next-line no-param-reassign
          field.service = this[field.service as keyof this];
        }
      });
    });
  }

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
