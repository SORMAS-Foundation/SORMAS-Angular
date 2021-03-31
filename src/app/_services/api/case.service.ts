import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CaseSerializer } from '../../_serializers/case.serializer';

import * as constants from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<CaseDataDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '', constants.API_ROUTE_CASES, new CaseSerializer());
  }
}
