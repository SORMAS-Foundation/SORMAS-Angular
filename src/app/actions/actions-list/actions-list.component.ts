import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavItem, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './actions-list-table-data';
import { CONFIG_EVENTS, HEADER_HEIGHT, EVENT_FILTERS_FORM_ID } from '../../app.constants';
import { actionsBulkEditDefs } from './actions-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_FILTERS } from '../action-filters/action-filters-form-data';
import { EventGroupService } from '../../_services/api/event-group.service';
import { NotificationService } from '../../_services/notification.service';
import { TableComponent } from '../../shared/table/table.component';
import { viewOptionsDefs } from '../../events/event-components/event-groups-list/event-groups-list-action-data';
import { EventActionService } from '../../_services/api/event-action.service';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss'],
})
export class ActionsListComponent implements OnInit, OnDestroy {
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

  private subscriptions: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public eventActionService: EventActionService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private eventGroupService: EventGroupService,
    private notificationService: NotificationService
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
