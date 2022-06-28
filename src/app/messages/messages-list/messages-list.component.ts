import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ACTIONS_EXTERNAL_MESSAGE,
  ADD_MODAL_NARROW,
  CONFIG_EXTERNAL_MESSAGES,
  HEADER_HEIGHT,
  EXTERNAL_MESSAGE_FILTERS_FORM_ID,
} from '../../app.constants';
import { NavItem, TableColumn } from '../../_models/common';
import { SampleDto } from '../../_models/sampleDto';
import { defaultColumnDefs } from './messages-list-table-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { actionsBulkEditDefs } from './messages-list-actions-data';
import { ExternalMessageService } from '../../_services/api/external-message.service';
import { FORM_DATA_LAB_MESSAGE_FILTERS } from '../messages-filters/messages-filters-form-data';
import { MessageAssignComponent } from '../message-assign/message-assign.component';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_LAB_MESSAGE_FILTERS));
  samples: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EXTERNAL_MESSAGES;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = EXTERNAL_MESSAGE_FILTERS_FORM_ID;
  actionsBulkEditOptions: NavItem[] = actionsBulkEditDefs;

  private subscriptions: Subscription[] = [];

  constructor(public externalMessageService: ExternalMessageService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  assignUser(message: any): void {
    const dialogRef = this.dialog.open(MessageAssignComponent, {
      width: ADD_MODAL_NARROW,
      data: {
        message,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // refresh list
        }
      })
    );
  }

  doMessageAction([data, action]: [unknown, string]): void {
    switch (action) {
      case ACTIONS_EXTERNAL_MESSAGE.ASSIGN:
        this.assignUser(data);
        break;
      case ACTIONS_EXTERNAL_MESSAGE.PROCESS:
        // eslint-disable-next-line no-console
        console.log(action, data);
        break;
      case ACTIONS_EXTERNAL_MESSAGE.DOWNLOAD:
        // eslint-disable-next-line no-console
        console.log(action, data);
        break;
      default:
        break;
    }
  }

  refresh(): void {
    // call to backend? ask them to refresh list?
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
