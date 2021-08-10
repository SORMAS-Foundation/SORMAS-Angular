import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavItem, TableColumn } from '../../_models/common';
import { CONFIG_EVENTS } from '../../_constants/storage';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { defaultColumnDefs } from './events-list-table-data';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ADD_MODAL_MAX_WIDTH, HEADER_HEIGHT } from '../../_constants/common';
import { EventAddComponent } from '../event-add/event-add.component';
import { actionsBulkEditDefs } from './event-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormActionsService } from '../../_services/form-actions.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  routeParams = this.activeRoute.snapshot.queryParams;
  headerHeight = HEADER_HEIGHT;
  presetFilters: any;

  private subscription: Subscription[] = [];

  constructor(
    public eventService: EventService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.presetFilters = this.helperService.setQueryParamsInFilters(this.routeParams);
    this.subscription.push(
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

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard();
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
