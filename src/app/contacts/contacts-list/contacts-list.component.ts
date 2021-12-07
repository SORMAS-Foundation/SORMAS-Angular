import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../_services/api/contact.service';
import { TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './contacts-list-table-data';
import {
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
  headerHeight = HEADER_HEIGHT;
  formIdFilters = CONTACT_FILTERS_FORM_ID;

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
