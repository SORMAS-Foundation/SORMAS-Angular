import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { addDays, format } from 'date-fns';
import { filter } from 'rxjs/operators';
import { ContactService } from '../../_services/api/contact.service';
import { Filter, NavItem, TableColumn, TableDataFormatOptions } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import {
  ACTIONS_CONTACT,
  ACTIONS_VIEW_OPTIONS,
  ADD_MODAL_MAX_WIDTH,
  API_ROUTE_CONTACTS,
  CONFIG_EVENTS,
  CONTACT_FILTERS_FORM_ID,
  CONTACT_LINE_LISTING_FORM_ID,
  EXPORT_TYPES,
  HEADER_HEIGHT,
  PERIOD_PICKER_DEFAULT_RANGE,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../app.constants';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { HelperService } from '../../_services/helper.service';
import { FORM_DATA_CONTACT_FILTERS } from '../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { actionsMoreDefs, actionsViewOptionsDefs } from './contact-list-actions-data';
import { LocalStorageService } from '../../_services/local-storage.service';
import { ContactFollowUpService } from '../../_services/api/contact-follow-up.service';
import { FilterService } from '../../_services/filter.service';
import * as tableDataDefault from './contacts-list-table-data';
import * as tableDataDetailed from './contacts-list-detailed-table-data';
import * as tableDataFollowUp from './contacts-list-follow-up-table-data';
import { LineListingAddComponent } from '../../shared/modals/line-listing-add-modal/line-listing-add.component';
import { FORM_DATA_LINE_LISTING_ADD } from './contact-line-listing-add-form-data';
import { ExportService } from '../../_services/api/export.service';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CONTACT_FILTERS));
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;
  routeParams = this.activeRoute.snapshot.queryParams;
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsMore: NavItem[] = actionsMoreDefs;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = CONTACT_FILTERS_FORM_ID;
  tableView = ACTIONS_VIEW_OPTIONS.DEFAULT;
  legend: any[] | undefined;
  views = ACTIONS_VIEW_OPTIONS;
  showTable = true;
  $service: any;
  presetFilters: Filter[] = [];
  to: Date = new Date();
  from: Date = addDays(new Date(), -PERIOD_PICKER_DEFAULT_RANGE + 1);

  private subscriptions: Subscription[] = [];

  constructor(
    private contactService: ContactService,
    private contactFollowUpService: ContactFollowUpService,
    public helperService: HelperService,
    public exportService: ExportService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.$service = this.contactService;
    this.defaultColumns = tableDataDefault.defaultColumnDefs;
    this.legend = tableDataDefault.legendDefs;
    this.subscriptions.push(
      this.activeRoute.queryParams.subscribe((params: any) => {
        this.routeParams = params;
        this.presetFilters = this.helperService.setQueryParamsInFilters(this.routeParams);
      })
    );
    this.subscriptions.push(
      this.filterService
        .getFilters()
        .pipe(filter(({ formId }) => formId === this.formIdFilters))
        .subscribe(({ filters }) => this.updateFollowUpTable(filters))
    );
  }

  updateFollowUpTable(filters?: Filter[]): void {
    this.defaultColumns = this.generateFollowUpColumns(filters);
  }

  generateFollowUpColumns(filters?: Filter[]): TableColumn[] {
    const base = tableDataFollowUp.defaultColumnDefs;
    const result = [...base];
    const from = filters?.[0] ? filters[0].value : this.from;
    const interval = filters?.[1] ? filters[1].value : PERIOD_PICKER_DEFAULT_RANGE;
    for (let i = 0; i < interval; i += 1) {
      result.push({
        name: format(addDays(from, i), 'd/M/yyyy'),
        dataKey: `visitResults[${i}].status`,
        isSortable: true,
        align: 'center',
        iconify: 'LegendFollowUpIcons',
        format: {
          type: TableDataFormatOptions.DISPLAY,
          pattern: ' ',
          params: [],
        },
      });
    }
    return result;
  }

  changeOptionView(event: any): void {
    this.localStorageService.remove(this.configKey);
    this.showTable = false;
    this.tableView = event;
    switch (event) {
      case ACTIONS_VIEW_OPTIONS.DETAILED:
        this.$service = this.contactService;
        this.legend = tableDataDetailed.legendDefs;
        this.defaultColumns = tableDataDetailed.defaultColumnDefs;
        break;
      case ACTIONS_VIEW_OPTIONS.FOLLOW_UP:
        this.$service = this.contactFollowUpService;
        this.legend = tableDataFollowUp.legendDefs;
        this.defaultColumns = this.generateFollowUpColumns();
        break;
      case ACTIONS_VIEW_OPTIONS.DEFAULT:
      default:
        this.$service = this.contactService;
        this.legend = tableDataDefault.legendDefs;
        this.defaultColumns = tableDataDefault.defaultColumnDefs;
    }
    setTimeout(() => {
      this.showTable = true;
    });
  }

  openAddContactModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('captions.contactCreateNew'),
        component: ContactAddComponent,
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

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_CONTACT.BASIC_EXPORT:
        this.exportBasicContact();
        break;
      case ACTIONS_CONTACT.DETAILED_EXPORT:
        this.exportDetailedContact();
        break;
      case ACTIONS_CONTACT.FOLLOW_UP_EXPORT:
        this.exportFollowUpContact();
        break;
      case ACTIONS_CONTACT.CUSTOM_EXPORT:
        break;
      case ACTIONS_CONTACT.LINE_LISTING:
        this.addLineListing();
        break;
      case ACTIONS_CONTACT.MERGE_DUPLICATES:
        break;
      default:
        break;
    }
  }

  addLineListing(): void {
    const dialogRef = this.dialog.open(LineListingAddComponent, {
      width: ADD_MODAL_MAX_WIDTH,
      maxWidth: `calc(${ADD_MODAL_MAX_WIDTH} - 16px)`,
      data: {
        formId: CONTACT_LINE_LISTING_FORM_ID,
        formData: FORM_DATA_LINE_LISTING_ADD,
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

  executeExport(exportType: string): void {
    const endpoint: string = API_ROUTE_CONTACTS.EXPORT;
    this.subscriptions.push(
      this.exportService.export(exportType, endpoint).subscribe({
        next: () => {},
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  exportBasicContact(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.executeExport(EXPORT_TYPES.BASIC);
  }

  exportDetailedContact(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.executeExport(EXPORT_TYPES.DETAILED);
  }

  exportFollowUpContact(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportFollowUp'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.executeExport(EXPORT_TYPES.FOLLOW_UP);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
