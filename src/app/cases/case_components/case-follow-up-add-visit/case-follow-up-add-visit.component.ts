import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ADD_EDIT_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { VisitService } from '../../../_services/api/visit.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-follow-up-add-visit-data';

@Component({
  selector: 'app-case-follow-up-add-visit',
  templateUrl: './case-follow-up-add-visit.component.html',
  styleUrls: ['./case-follow-up-add-visit.component.scss'],
})
export class CaseFollowUpAddVisitComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = data.FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS;
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
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'symptoms',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'general',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'respiratory',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'gastroIntestinal',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'skin',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'other',
                'hidden',
                true
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'complications',
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
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'symptoms',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'general',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'respiratory',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'gastroIntestinal',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'skin',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'other',
                'hidden',
                false
              );
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'complications',
                'hidden',
                false
              );
            }
          })
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
