import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { EventParticipantDto } from '../../_models/eventParticipantDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class EventParticipantService extends BaseService<EventParticipantDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_EVENT_PARTICIPANTS, new Serializer());
  }
}
