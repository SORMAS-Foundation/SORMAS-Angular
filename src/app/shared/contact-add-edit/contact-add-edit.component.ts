import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FORM_DATA_CONTACT_ADD_EDIT } from './contact-add-edit-form-data';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../_services/form-element-control.service';
import {
  ADD_EDIT_FORM_ID,
  ADD_MODAL_NARROW,
  ADD_MODAL_WIDE,
  BREAKPOINTS,
} from '../../app.constants';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss'],
})
export class ContactAddEditComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EDIT_FORM_ID;
  updatedResource: any;
  modalWidth: string;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ContactAddEditComponent>,
    public breakpointObserver: BreakpointObserver,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.data.resource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.data.resource,
        JSON.parse(JSON.stringify(FORM_DATA_CONTACT_ADD_EDIT))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(FORM_DATA_CONTACT_ADD_EDIT));
    }

    this.subscriptions.push(
      this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
        this.modalWidth = state.matches ? ADD_MODAL_WIDE : ADD_MODAL_NARROW;
        if (this.dialogRef) {
          this.dialogRef.updateSize(this.modalWidth);
        }
      })
    );
  }

  updateValues(values: any): void {
    this.updatedResource = values;
  }

  delete(): void {
    this.dialogRef.close({
      deleteResource: true,
      resource: this.data.resource,
    });
  }

  discard(): void {
    this.dialogRef.close();
  }

  save(): void {
    Object.keys(this.updatedResource).forEach(
      (key) => this.updatedResource[key] === undefined && delete this.updatedResource[key]
    );
    this.dialogRef.close({
      resource: this.updatedResource,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
