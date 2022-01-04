import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './immunization-profile-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { IMMUNIZATION_PROFILE_FORM_ID } from '../../../app.constants';
import { ImmunizationDto } from '../../../_models/immunizationDto';

@Component({
  selector: 'app-immunization-profile',
  templateUrl: './immunization-profile.component.html',
  styleUrls: ['./immunization-profile.component.scss'],
})
export class ImmunizationProfileComponent implements OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData: FormBase<any>[] = data.FORM_DATA_IMMUNIZATION_PROFILE;
  formId = IMMUNIZATION_PROFILE_FORM_ID;
  immunization: ImmunizationDto;

  public resourceService: BaseService<any>;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(
    private formElementControlService: FormElementControlService,
  ) {}

  updateComponent(immunizationItem: ImmunizationDto, resourceService: BaseService<any>): void {
    this.immunization = immunizationItem;
    this.resourceService = resourceService;

    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      immunizationItem,
      this.formData
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
