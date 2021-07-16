import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from '../../_services/api/contact.service';
import { TableColumn } from '../../_models/common';
import { CONFIG_EVENTS } from '../../_constants/storage';
import { EventDto } from '../../_models/eventDto';
import { defaultColumnDefs } from './contacts-list-table-data';
import { ADD_MODAL_MAX_WIDTH } from '../../_constants/common';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;

  private subscription: Subscription[] = [];

  constructor(
    public contactService: ContactService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
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
        if (result) {
          // callback
        }
      })
    );
  }
}
