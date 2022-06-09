import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { VisitService } from '../../../_services/api/visit.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-follow-up-add-visit-data';

@Component({
  selector: 'app-case-follow-up-add-visit',
  templateUrl: './case-follow-up-add-visit.component.html',
  styleUrls: ['./case-follow-up-add-visit.component.scss'],
})
export class CaseFollowUpAddVisitComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  public formData: FormBase<any>[] = data.FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS;
  formId = ADD_EDIT_FORM_ID;
  subscriptions: Subscription[] = [];

  @ViewChild('form') dynamicForm: any;

  constructor(
    public visitService: VisitService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS));

    setTimeout(() => {
      const { form } = this.dynamicForm;
      if (form) {
        const availability = form.get('availability');
        availability.setValue('COOPERATIVE');

        this.subscriptions.push(
          availability.valueChanges.subscribe((val: string) => {
            if (val !== 'COOPERATIVE') {
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'measurements',
                'hidden',
                true
              );
            } else {
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'measurements',
                'hidden',
                false
              );
            }
            console.log('ssss', this.myFormElements);
          })
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
