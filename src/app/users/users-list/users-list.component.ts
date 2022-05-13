import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserDto } from '../../_models/models';
import { TableColumn } from '../../_models/common';
import { CONFIG_USERS } from '../../_constants/storage';
import { defaultColumnDefs } from './users-list-table-data';
import { UserService } from '../../_services/api/user.service';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ADD_MODAL_MAX_WIDTH,
  API_ROUTE_USERS,
  EXPORT_TYPES,
  HEADER_HEIGHT,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  USER_FILTERS_FORM_ID,
} from '../../app.constants';
import { UserAddComponent } from '../user-add/user-add.component';
import { FORM_DATA_USER_FILTERS } from '../user-filters/user-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { NotificationService } from '../../_services/notification.service';
import { ExportService } from '../../_services/api/export.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_USER_FILTERS));
  users: UserDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_USERS;
  headerHeight = HEADER_HEIGHT;
  formId = USER_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  constructor(
    public userService: UserService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  exportBasicEventGroup(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportUserRoles'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_USERS.EXPORT);
  }

  openAddUserModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewUser'),
        component: UserAddComponent,
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

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
