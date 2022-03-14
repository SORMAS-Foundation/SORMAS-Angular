import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ACTIONS_LAB_MESSAGE,
  ADD_MODAL_NARROW,
  CONFIG_SAMPLES,
  HEADER_HEIGHT,
  LAB_MESSAGE_FILTERS_FORM_ID,
} from '../../app.constants';
import { NavItem, TableColumn } from '../../_models/common';
import { SampleDto } from '../../_models/sampleDto';
import { defaultColumnDefs } from './lab-messages-list-table-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { actionsBulkEditDefs, actionsViewOptionsDefs } from './lab-messages-list-actions-data';
import { LabMessageService } from '../../_services/api/lab-message.service';
import { FORM_DATA_LAB_MESSAGE_FILTERS } from '../lab-messages-filters/lab-messages-filters-form-data';
import { LabMessageAssignComponent } from '../lab-message-assign/lab-message-assign.component';

@Component({
  selector: 'app-lab-messages-list',
  templateUrl: './lab-messages-list.component.html',
  styleUrls: ['./lab-messages-list.component.scss'],
})
export class LabMessagesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_LAB_MESSAGE_FILTERS));
  samples: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_SAMPLES;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = LAB_MESSAGE_FILTERS_FORM_ID;
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsBulkEditOptions: NavItem[] = actionsBulkEditDefs;

  private subscriptions: Subscription[] = [];

  constructor(public labMessageService: LabMessageService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  assignUser(labMessage: any): void {
    const dialogRef = this.dialog.open(LabMessageAssignComponent, {
      width: ADD_MODAL_NARROW,
      data: {
        labMessage,
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

  doLabMessageAction([data, action]: [unknown, string]): void {
    switch (action) {
      case ACTIONS_LAB_MESSAGE.ASSIGN:
        this.assignUser(data);
        break;
      case ACTIONS_LAB_MESSAGE.PROCESS:
        // eslint-disable-next-line no-console
        console.log(action, data);
        break;
      case ACTIONS_LAB_MESSAGE.DOWNLOAD:
        // eslint-disable-next-line no-console
        console.log(action, data);
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
