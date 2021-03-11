import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CaseSerializer } from '../../_serializers/case.serializer';
import { CaseItem } from '../../_models/case';

import * as constants from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<CaseItem> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '', constants.API_ROUTE_CASES, new CaseSerializer());
  }
}
