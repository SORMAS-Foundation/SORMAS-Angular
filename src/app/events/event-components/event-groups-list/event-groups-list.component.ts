import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ADD_MODAL_MAX_WIDTH,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  EXPORT_TYPES,
} from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { EventGroupService } from '../../../_services/api/event-group.service';
import { EventAddComponent } from '../../event-add/event-add.component';
import { actionsMoreDefs, viewOptionsDefs } from './event-groups-list-action-data';
import { defaultColumnDefs } from './event-groups-list-table-data';
import { EVENT_GROUP_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';
import { ACTIONS_EVENT_GROUP, API_ROUTE_EVENT_GROUPS } from '../../../app.constants';
import { NotificationService } from '../../../_services/notification.service';
import { ExportService } from '../../../_services/api/export.service';

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
  actionsMore: NavItem[] = actionsMoreDefs;

  private subscription: Subscription[] = [];
  constructor(
    public eventGroupService: EventGroupService,
    public exportService: ExportService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  onActionSelected(event: any): void {
    if (event === ACTIONS_EVENT_GROUP.BASIC_EXPORT) {
      this.exportBasicEventGroup();
    }
  }

  exportBasicEventGroup(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_EVENT_GROUPS.EXPORT);
  }

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
