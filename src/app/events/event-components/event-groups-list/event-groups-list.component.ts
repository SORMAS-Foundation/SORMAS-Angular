import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ADD_MODAL_MAX_WIDTH } from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { EventGroupService } from '../../../_services/api/event-group.service';
import { EventAddComponent } from '../../event-add/event-add.component';
import { viewOptionsDefs } from './event-groups-list-action-data';
import { defaultColumnDefs } from './event-groups-list-table-data';
import { EVENT_GROUP_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';

@Component({
  selector: 'app-event-groups-list',
  templateUrl: './event-groups-list.component.html',
  styleUrls: ['./event-groups-list.component.scss'],
})
export class EventGroupsListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsViewOption: NavItem[] = viewOptionsDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = EVENT_GROUP_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];
  constructor(
    public eventGroupService: EventGroupService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  openAddEventModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewEvent'),
        component: EventAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
