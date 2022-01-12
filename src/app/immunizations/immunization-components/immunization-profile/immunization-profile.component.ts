import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
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
export class ImmunizationProfileComponent implements AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData: FormBase<any>[] = data.FORM_DATA_IMMUNIZATION_PROFILE;
  formId = IMMUNIZATION_PROFILE_FORM_ID;
  immunization: ImmunizationDto;

  public resourceService: BaseService<any>;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(private formElementControlService: FormElementControlService) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const immunizationManagementOverwrite = form.get('immunizationManagementOverwrite');
      const immunizationManagementStatus = form.get('immunizationManagementStatus');
      const immunizationStatus = form.get('immunizationStatus');
      const meansOfImmunization = form.get('meansOfImmunization');

      this.subscriptions.push(
        immunizationManagementOverwrite.valueChanges.subscribe((val: boolean) => {
          if (val) {
            immunizationManagementStatus.enable();
          } else {
            immunizationManagementStatus.disable();
          }
        })
      );

      this.subscriptions.push(
        immunizationManagementStatus.valueChanges.subscribe((val: string) => {
          if (val === 'SCHEDULED' || val === 'ONGOING') {
            immunizationStatus.setValue('PENDING');
          }
          if (val === 'COMPLETED') {
            immunizationStatus.setValue('ACQUIRED');
          }
          if (val === 'CANCELED') {
            immunizationStatus.setValue('NOT_ACQUIRED');
          }
        })
      );

      this.subscriptions.push(
        meansOfImmunization.valueChanges.subscribe((val: string) => {
          if (val === 'RECOVERY' || val === 'VACCINATION_RECOVERY') {
            this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
              this.myFormElements,
              'recovery',
              'hidden',
              false
            );
          } else {
            this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
              this.myFormElements,
              'recovery',
              'hidden',
              true
            );
          }
        })
      );
    }
  }

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
