import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { EventSerializer } from '../../_serializers/event.serializer';

import * as constants from '../../app.constants';
import { EventDto } from '../../_models/eventDto';

@Injectable({
  providedIn: 'root',
})
export class EventService extends BaseService<EventDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '', constants.API_ROUTE_EVENTS, new EventSerializer());
  }
}
