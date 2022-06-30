import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ADD_EDIT_FORM_ID } from '../../app.constants';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { VisitService } from '../../_services/api/visit.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { FORM_DATA_FOLLOW_UP_VISIT_ADD } from './follow-up-visit-add-data';

@Component({
  selector: 'app-follow-up-visit-add',
  templateUrl: './follow-up-visit-add.component.html',
  styleUrls: ['./follow-up-visit-add.component.scss'],
})
export class FollowUpVisitAddComponent implements AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_FOLLOW_UP_VISIT_ADD));
  formId = ADD_EDIT_FORM_ID;
  subscriptions: Subscription = new Subscription();

  @ViewChild('form') dynamicForm: any;

  constructor(
    public visitService: VisitService,
    private formElementControlService: FormElementControlService
  ) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const availability = form.get('availability');
      availability.setValue('COOPERATIVE');

      this.subscriptions.add(
        availability.valueChanges.subscribe((val: string) =>
          this.toggleSections(val === 'COOPERATIVE')
        )
      );
    }
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
        !visible
      );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
