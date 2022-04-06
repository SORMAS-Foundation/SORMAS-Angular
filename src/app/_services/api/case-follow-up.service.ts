import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';
import { HelperService } from '../helper.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class CaseFollowUpService extends BaseService<CaseDataDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_CASES_FOLLOW_UP, new Serializer());
  }
}
