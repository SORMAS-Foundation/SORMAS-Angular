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
import { ADD_MODAL_MAX_WIDTH, HEADER_HEIGHT, ADD_EDIT_FORM_ID } from '../../_constants/common';
import { UserAddComponent } from '../user-add/user-add.component';
import { FormActionsService } from '../../_services/form-actions.service';
import { FORM_DATA_USER_FILTERS } from '../user-filters/user-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

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

  private subscription: Subscription[] = [];

  constructor(
    public userService: UserService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
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
        this.formActionsService.setDiscard(ADD_EDIT_FORM_ID);
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
