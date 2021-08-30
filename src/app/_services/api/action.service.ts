import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { ActionSerializer } from '../../_serializers/action.serializer';

import * as constants from '../../app.constants';
import { ActionDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService extends BaseService<ActionDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_ACTIONS, new ActionSerializer());
  }
}
