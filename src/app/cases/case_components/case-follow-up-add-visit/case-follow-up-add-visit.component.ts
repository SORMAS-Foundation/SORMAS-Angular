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
    setTimeout(() => {
      const { form } = this.dynamicForm;
      if (form) {
        const availability = form.get('availability');
        availability.setValue('COOPERATIVE');

        this.subscriptions.push(
          availability.valueChanges.subscribe((val: string) => {
            if (val === 'COOPERATIVE') {
              this.toggleSections(false);
            }
            if (val === 'UNCOOPERATIVE' || val === 'UNAVAILABLE') {
              this.toggleSections(true);
            }
          })
        );
      }
    });
  }

  toggleSections(visible: boolean): void {
    const ids: string[] = [
      'measurements',
      'symptoms',
      'general',
      'respiratory',
      'gastroIntestinal',
      'skin',
      'other',
      'complications',
    ];

    ids.forEach((id) => {
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        id,
        'hidden',
        visible
      );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
