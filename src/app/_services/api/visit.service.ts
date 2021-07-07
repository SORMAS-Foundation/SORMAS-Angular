import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { VisitSerializer } from '../../_serializers/visit.serializer';

import * as constants from '../../app.constants';
import { VisitDto } from '../../_models/visitDto';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class VisitService extends BaseService<VisitDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_VISITS, new VisitSerializer());
  }
}
