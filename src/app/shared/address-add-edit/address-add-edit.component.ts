import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FORM_DATA_ADDRESS_ADD_EDIT } from './address-add-edit-form-data';
import { FormBase } from '../dynamic-form/types/form-element-base';
import { PersonService } from '../../_services/api/person.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { ADD_MODAL_NARROW, ADD_MODAL_WIDE, BREAKPOINTS } from '../../app.constants';

@Component({
  selector: 'app-address-add-edit',
  templateUrl: './address-add-edit.component.html',
  styleUrls: ['./address-add-edit.component.scss'],
})
export class AddressAddEditComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  updatedResource: any;
  modalWidth: string;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public personService: PersonService,
    private dialogRef: MatDialogRef<AddressAddEditComponent>,
    public breakpointObserver: BreakpointObserver,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    if (this.data.resource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.data.resource,
        JSON.parse(JSON.stringify(FORM_DATA_ADDRESS_ADD_EDIT))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(FORM_DATA_ADDRESS_ADD_EDIT));
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
