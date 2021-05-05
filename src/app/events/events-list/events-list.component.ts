import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_EVENTS } from '../../_constants/storage';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { defaultColumnDefs } from './events-list-table-data';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_EVENTS;

  constructor(public eventService: EventService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
