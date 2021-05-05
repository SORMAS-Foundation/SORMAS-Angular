import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { EventSerializer } from '../../_serializers/event.serializer';

import * as constants from '../../app.constants';
import { EventDto } from '../../_models/eventDto';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class EventService extends BaseService<EventDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_EVENTS, new EventSerializer());
  }
}
