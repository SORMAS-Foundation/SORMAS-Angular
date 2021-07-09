import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_PERSONS } from '../../_constants/storage';
import { defaultColumnDefs } from './users-list-table-data';
import { UserService } from '../../_services/api/user.service';
import { UserDto } from '../../_models/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  tasks: UserDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_PERSONS;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
