import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavItem, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { defaultColumnDefs } from './events-list-table-data';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIG_EVENTS,
  HEADER_HEIGHT,
  EVENT_FILTERS_FORM_ID,
  MODAL_MEDIUM_WIDTH,
  ADD_EVENT_GROUP_FORM_ID,
} from '../../app.constants';
import { EventAddComponent } from '../event-add/event-add.component';
import { actionsBulkEditDefs } from './event-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_FILTERS } from '../event-filters/event-filters-form-data';
import { EventGroupAddEventsModalComponent } from '../event-group-add-events-modal/event-group-add-events-modal.component';
import { EventGroupAddModalComponent } from '../event-group-add-modal/event-group-add-modal.component';
import { EventGroupService } from '../../_services/api/event-group.service';
import { NotificationService } from '../../_services/notification.service';
import { FormActionsService } from '../../_services/form-actions.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_EVENT_FILTERS));
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  routeParams = this.activeRoute.snapshot.queryParams;
  headerHeight = HEADER_HEIGHT;
  presetFilters: any;
  formIdFilters = EVENT_FILTERS_FORM_ID;

  private subscriptions: Subscription[] = [];

  constructor(
    public eventService: EventService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private eventGroupService: EventGroupService,
    private notificationService: NotificationService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.presetFilters = this.helperService.setQueryParamsInFilters(this.routeParams);
    this.subscriptions.push(
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.routeParams = params;
      })
    );
  }

  openAddEventModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewEvent'),
        component: EventAddComponent,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  addNewEventGroup(): void {
    const dialogRef = this.dialog.open(EventGroupAddModalComponent, {
      maxWidth: MODAL_MEDIUM_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.formActionsService.setSave(ADD_EVENT_GROUP_FORM_ID, result.eventGroupAdded);
        }
      })
    );
  }

  linkEvents(eventGroupId: string, events: any[]): void {
    this.subscriptions.push(
      this.eventGroupService.linkEvent(eventGroupId, events).subscribe({
        next: (response: any) => {},
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  onGroupEvents(events: any): void {
    const dialogRef = this.dialog.open(EventGroupAddEventsModalComponent, {
      maxWidth: MODAL_MEDIUM_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          if (result.selectedEventGroup === null) {
            this.addNewEventGroup();
          } else {
            this.linkEvents(result.selectedEventGroup.uuid, events);
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
