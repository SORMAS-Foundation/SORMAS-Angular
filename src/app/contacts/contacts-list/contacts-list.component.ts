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
  ACTIONS_VIEW_OPTIONS,
  ADD_MODAL_MAX_WIDTH,
  CONFIG_EVENTS,
  CONTACT_FILTERS_FORM_ID,
  HEADER_HEIGHT,
  PERIOD_PICKER_DEFAULT_RANGE,
} from '../../app.constants';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { HelperService } from '../../_services/helper.service';
import { FORM_DATA_CONTACT_FILTERS } from '../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { actionsViewOptionsDefs } from './contact-list-actions-data';
import { LocalStorageService } from '../../_services/local-storage.service';
import { ContactFollowUpService } from '../../_services/api/contact-follow-up.service';
import { FilterService } from '../../_services/filter.service';
import * as tableDataDefault from './contacts-list-table-data';
import * as tableDataDetailed from './contacts-list-detailed-table-data';
import * as tableDataFollowUp from './contacts-list-follow-up-table-data';

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
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private filterService: FilterService
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
