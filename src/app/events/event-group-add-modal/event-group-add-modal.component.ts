import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EventGroupService } from '../../_services/api/event-group.service';
import * as formData from './event-group-add-modal-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ADD_EVENT_GROUP_FORM_ID } from '../../_constants/form-identifiers';
import { FormActionsService } from '../../_services/form-actions.service';

@Component({
  selector: 'app-event-group-add-modal',
  templateUrl: './event-group-add-modal.component.html',
  styleUrls: ['./event-group-add-modal.component.scss'],
})
export class EventGroupAddModalComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EVENT_GROUP_FORM_ID;

  private subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<EventGroupAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventGroupService: EventGroupService,
    private formActionsService: FormActionsService
  ) {}

  save(): void {
    this.formActionsService.setSave(ADD_EVENT_GROUP_FORM_ID, null, false);
  }

  ngOnInit(): void {
    this.myFormElements = JSON.parse(JSON.stringify(formData.FORM_DATA_EVENT_GROUP_ADD));

    this.subscriptions.push(
      this.formActionsService
        .getCloseFormModal()
        .pipe(filter(({ formId }) => ADD_EVENT_GROUP_FORM_ID === formId))
        .subscribe((response: any) => {
          if (response.closeModal) {
            this.dialogRef.close({
              response,
            });
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
