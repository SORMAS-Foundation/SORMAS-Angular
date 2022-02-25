import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import * as data from './case-add-form-data';
import { CaseService } from '../../_services/api/case.service';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../_models/caseDataDto';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { ADD_EDIT_FORM_ID } from '../../app.constants';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.scss'],
})
export class CaseAddComponent implements OnInit, OnDestroy {
  @Input() selectedResource: CaseDataDto;
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;
  subscriptions: Subscription[] = [];

  @ViewChild('form') dynamicForm: any;

  constructor(
    public caseService: CaseService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_CASE_ADD))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_CASE_ADD));
    }

    setTimeout(() => {
      const { form } = this.dynamicForm;
      if (form) {
        const caseOrigin = form.get('caseOrigin');
        const pointOfEntryDiffer = form.get('pointOfEntryDiffer');
        const pointOfEntry = form.get('pointOfEntry');
        const placeOfStay = form.get('placeOfStay');
        const caseDataEnterHomeAddressNow = form.get('caseDataEnterHomeAddressNow');
        const district = form.get('district__uuid');
        const districtPointOfEntry = form.get('districtPointOfEntry__uuid');

        caseOrigin.setValue('POINT_OF_ENTRY');
        placeOfStay.setValue('FACILITY');
        pointOfEntry.disable();
        this.dynamicForm.changeFormElementAttribute('pointOfEntryDetails', 'active', false);

        this.subscriptions.push(
          caseOrigin.valueChanges.subscribe((val: string) => {
            if (val === 'IN_COUNTRY') {
              this.dynamicForm.changeFormElementAttribute('pointOfEntryDiffer', 'active', false);
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'pointOfEntry',
                'hidden',
                true
              );
            } else {
              this.dynamicForm.changeFormElementAttribute('pointOfEntryDiffer', 'active', true);
              this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
                this.myFormElements,
                'pointOfEntry',
                'hidden',
                false
              );

              setTimeout(() => {
                pointOfEntry.setValue('');
                pointOfEntry.disable();
                this.dynamicForm.changeFormElementAttribute('pointOfEntryDetails', 'active', false);
              });
            }
          })
        );

        this.subscriptions.push(
          pointOfEntry.valueChanges.subscribe((val: string) => {
            if (typeof val === 'undefined') {
              this.dynamicForm.changeFormElementAttribute('pointOfEntryDetails', 'active', false);
            } else {
              this.dynamicForm.changeFormElementAttribute('pointOfEntryDetails', 'active', true);
            }
          })
        );

        this.subscriptions.push(
          district.valueChanges.subscribe((val: string) => {
            if (val !== null && !pointOfEntryDiffer.value) {
              if (typeof val === 'undefined') {
                pointOfEntry.setValue('');
                pointOfEntry.disable();
                this.dynamicForm.changeFormElementAttribute('pointOfEntryDetails', 'active', false);
              } else {
                pointOfEntry.enable();
              }
            }
          })
        );

        this.subscriptions.push(
          districtPointOfEntry.valueChanges.subscribe((val: string) => {
            if (val !== null) {
              if (typeof val === 'undefined') {
                pointOfEntry.setValue('');
                pointOfEntry.disable();
              } else {
                pointOfEntry.enable();
              }
            }
          })
        );

        this.manipulateHomeAddressFields(caseDataEnterHomeAddressNow.value);
        this.subscriptions.push(
          caseDataEnterHomeAddressNow.valueChanges.subscribe((val: string) => {
            this.manipulateHomeAddressFields(val);
          })
        );
      }
    });
  }

  manipulateHomeAddressFields(val: string): void {
    if (val) {
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'facility',
        'hidden',
        false
      );
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'address',
        'hidden',
        false
      );
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'gps',
        'hidden',
        false
      );
    } else {
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'facility',
        'hidden',
        true
      );
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'address',
        'hidden',
        true
      );
      this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
        this.myFormElements,
        'gps',
        'hidden',
        true
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
