import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { EventGroupSerializer } from '../../_serializers/event-group.serializer';

@Injectable({
  providedIn: 'root',
})
export class EventActionService extends BaseService<any> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_EVENT_ACTIONS,
      new EventGroupSerializer()
    );
  }
}
