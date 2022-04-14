import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavItem, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './actions-list-table-data';
import {
  CONFIG_EVENTS,
  HEADER_HEIGHT,
  EVENT_FILTERS_FORM_ID,
  ACTIONS_EVENT_ACTION,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  EXPORT_TYPES,
  API_ROUTE_EVENT_ACTIONS,
} from '../../app.constants';
import { actionsBulkEditDefs, actionsMoreDefs } from './actions-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_FILTERS } from '../action-filters/action-filters-form-data';
import { NotificationService } from '../../_services/notification.service';
import { TableComponent } from '../../shared/table/table.component';
import { viewOptionsDefs } from '../../events/event-components/event-groups-list/event-groups-list-action-data';
import { EventActionService } from '../../_services/api/event-action.service';
import { ExportService } from '../../_services/api/export.service';

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
  actionsMore: NavItem[] = actionsMoreDefs;
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
    public exportService: ExportService,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
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

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_EVENT_ACTION.BASIC_EXPORT:
        this.exportBasicEventAction();
        break;
      case ACTIONS_EVENT_ACTION.DETAILED_EXPORT:
        this.exportDetailedEventAction();
        break;
      default:
        break;
    }
  }

  exportBasicEventAction(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_EVENT_ACTIONS.EXPORT);
  }

  exportDetailedEventAction(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_EVENT_ACTIONS.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
