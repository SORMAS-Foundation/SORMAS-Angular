import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
} from '../../app.constants';
import { EventAddComponent } from '../event-add/event-add.component';
import { actionsBulkEditDefs } from './event-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_FILTERS } from '../event-filters/event-filters-form-data';
import { viewOptionsDefs } from '../event-components/event-groups-list/event-groups-list-action-data';
import { ACTIONS_VIEW_OPTION } from '../../_constants/actions';

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
  actionsViewOption: NavItem[] = viewOptionsDefs;

  private subscription: Subscription[] = [];

  constructor(
    public eventService: EventService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private router: Router
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
        if (result) {
          // callback
        }
      })
    );
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_VIEW_OPTION.EVENTS:
        this.router.navigate(['/events/list']);
        break;
      case ACTIONS_VIEW_OPTION.ACTIONS:
        this.router.navigate(['/events/event-actions/list']);
        break;
      case ACTIONS_VIEW_OPTION.GROUPS:
        this.router.navigate(['/events/event-groups/list']);
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
