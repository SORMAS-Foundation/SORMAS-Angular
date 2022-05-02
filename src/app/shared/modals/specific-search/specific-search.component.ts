import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CUSTOM_SEARCH_ID } from '../../../app.constants';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';
import { FORM_DATA_SPECIFIC_SEARCH } from './specific-search-form-data';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss'],
})
export class SpecificSearchComponent implements OnInit {
  myFormElements: FormBase<any>[] = [];
  updatedResource: any;
  modalWidth: string;
  formId = CUSTOM_SEARCH_ID;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SpecificSearchComponent>,
    public breakpointObserver: BreakpointObserver,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.myFormElements = JSON.parse(JSON.stringify(FORM_DATA_SPECIFIC_SEARCH));
  }

  // this.subscriptions.push(
  //   this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
  //     this.modalWidth = state.matches ? ADD_MODAL_WIDE : ADD_MODAL_NARROW;
  //     if (this.dialogRef) {
  //       this.dialogRef.updateSize(this.modalWidth);
  //     }
  //   })
  // );

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
