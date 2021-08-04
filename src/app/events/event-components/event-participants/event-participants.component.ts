import { Component } from '@angular/core';
import { TableColumn } from '../../../_models/common';
import { CONFIG_CASES } from '../../../_constants/storage';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { defaultColumnDefs } from './event-participants-list-table-data';
import { EventParticipantService } from '../../../_services/api/event-participant.service';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;

  constructor(public eventParticipantService: EventParticipantService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
