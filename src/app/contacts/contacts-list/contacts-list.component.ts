import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../_services/api/contact.service';
import { NavItem, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './contacts-list-table-data';
import {
  ACTIONS_VIEW_OPTIONS,
  ADD_MODAL_MAX_WIDTH,
  CONFIG_EVENTS,
  CONTACT_FILTERS_FORM_ID,
  HEADER_HEIGHT,
} from '../../app.constants';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { HelperService } from '../../_services/helper.service';
import { FORM_DATA_CONTACT_FILTERS } from '../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { defaultColumnDetailedDefs } from './contacts-list-detailed-table-data';
import { actionsViewOptionsDefs } from './contact-list-actions-data';

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
  detailedTableView = ACTIONS_VIEW_OPTIONS.DETAILED;
  showTable = true;

  private subscriptions: Subscription[] = [];

  constructor(
    public contactService: ContactService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.subscriptions.push(
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.routeParams = params;
      })
    );
  }

  changeOptionView(event: any): void {
    this.showTable = false;
    this.tableView = event;
    switch (event) {
      case ACTIONS_VIEW_OPTIONS.DEFAULT:
        this.defaultColumns = defaultColumnDefs;
        break;
      case ACTIONS_VIEW_OPTIONS.DETAILED:
        this.defaultColumns = defaultColumnDetailedDefs;
        break;
      default:
        // eslint-disable-next-line no-console
        console.log(event);
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
