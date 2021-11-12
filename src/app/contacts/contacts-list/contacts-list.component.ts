import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../../_services/api/contact.service';
import { TableColumn } from '../../_models/common';
import { CONFIG_EVENTS } from '../../_constants/storage';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './contacts-list-table-data';
import { ADD_MODAL_MAX_WIDTH, HEADER_HEIGHT, ADD_EDIT_FORM_ID } from '../../_constants/common';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { HelperService } from '../../_services/helper.service';
import { FormActionsService } from '../../_services/form-actions.service';
import { FORM_DATA_CONTACT_FILTERS } from '../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CONTACT_FILTERS));
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;
  routeParams = this.activeRoute.snapshot.queryParams;
  headerHeight = HEADER_HEIGHT;

  private subscription: Subscription[] = [];

  constructor(
    public contactService: ContactService,
    public helperService: HelperService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.subscription.push(
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

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard(ADD_EDIT_FORM_ID);
        if (result) {
          // callback
        }
      })
    );
  }
}
