import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter, NavItem, TableColumn } from '../../../_models/common';
import { CONFIG_CASES } from '../../../_constants/storage';
import { defaultColumnDefs } from './event-participants-list-table-data';
import { EventParticipantService } from '../../../_services/api/event-participant.service';
import { actionsBulkEditDefs } from './event-participants-list-actions-data';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  presetFilters: Filter[] = [];
  constructor(
    public eventParticipantService: EventParticipantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.activatedRoute.params.subscribe((params) => {
      this.presetFilters = [{ field: 'event', value: { uuid: params.eventId } }];
    });
  }
}
