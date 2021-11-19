import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventGroupService } from '../../_services/api/event-group.service';
import * as formData from './event-group-add-modal-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ADD_EVENT_GROUP_FORM_ID } from '../../_constants/form-identifiers';

@Component({
  selector: 'app-event-group-add-modal',
  templateUrl: './event-group-add-modal.component.html',
  styleUrls: ['./event-group-add-modal.component.scss'],
})
export class EventGroupAddModalComponent implements OnInit {
  myFormElements: FormBase<any>[] = [];
  formId = ADD_EVENT_GROUP_FORM_ID;

  constructor(
    public dialogRef: MatDialogRef<EventGroupAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventGroupService: EventGroupService
  ) {}

  save(): void {
    this.dialogRef.close({
      eventGroupAdded: {
        name: '',
      },
    });
  }

  ngOnInit(): void {
    this.myFormElements = JSON.parse(JSON.stringify(formData.FORM_DATA_EVENT_GROUP_ADD));
  }
}
