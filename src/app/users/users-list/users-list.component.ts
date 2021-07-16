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
import { ADD_MODAL_MAX_WIDTH } from '../../_constants/common';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: UserDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_USERS;

  private subscription: Subscription[] = [];

  constructor(
    public userService: UserService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddUserModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      width: ADD_MODAL_MAX_WIDTH,
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
