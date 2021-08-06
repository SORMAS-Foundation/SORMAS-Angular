import { Component, OnInit } from '@angular/core';
import { NavItem, TableColumn } from '../../../_models/common';
import { CONFIG_CASES } from '../../../_constants/storage';
import { defaultColumnDefs } from './event-participants-list-table-data';
import { EventParticipantService } from '../../../_services/api/event-participant.service';
import { actionsBulkEditDefs } from './event-participants-list-actions-data';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  isContactRelatedEvent = false;

  constructor(
    public eventParticipantService: EventParticipantService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  onChangeContactRelatedEvent(): void {
    this.filterService.setFilters([
      {
        field: 'countContactRelatedEvent',
        value: this.isContactRelatedEvent,
      },
    ]);
  }
}
