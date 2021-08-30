import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CommunitySerializer } from '../../_serializers/community.serializer';

import * as constants from '../../app.constants';
import { CommunityDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class CommunityService extends BaseService<CommunityDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_COMMUNITIES,
      new CommunitySerializer()
    );
  }
}
