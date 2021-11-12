import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { OutbreakSerializer } from '../../_serializers/outbreak.serializer';

import * as constants from '../../app.constants';
import { OutbreakDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class OutbreakService extends BaseService<OutbreakDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_OUTBREAKS, new OutbreakSerializer());
  }
}
