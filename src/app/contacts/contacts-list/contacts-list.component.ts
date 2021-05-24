import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_EVENTS } from '../../_constants/storage';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { defaultColumnDefs } from './contacts-list-table-data';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;

  constructor(public contactService: EventService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
