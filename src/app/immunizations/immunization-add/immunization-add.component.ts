import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import * as data from './immunization-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { IMMUNIZATION_ADD_FORM_ID } from '../../app.constants';
import { ImmunizationService } from '../../_services/api/immunization.service';

@Component({
  selector: 'app-immunization-add',
  templateUrl: './immunization-add.component.html',
  styleUrls: ['./immunization-add.component.scss'],
})
export class ImmunizationAddComponent implements AfterViewInit, OnDestroy {
  public formData: FormBase<any>[] = data.FORM_DATA_IMMUNIZATION_ADD;
  formId = IMMUNIZATION_ADD_FORM_ID;

  subscriptions: Subscription[] = [];

  @ViewChild('form') dynamicForm: any;

  constructor(public immunizationService: ImmunizationService) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const immunizationManagementOverwrite = form.get('immunizationManagementOverwrite');
      const immunizationManagementStatus = form.get('immunizationManagementStatus');
      const immunizationStatus = form.get('immunizationStatus');

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
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
