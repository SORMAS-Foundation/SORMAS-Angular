import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { DistrictSerializer } from '../../_serializers/district.serializer';

import * as constants from '../../app.constants';
import { DistrictDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class DistrictService extends BaseService<DistrictDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_DISTRICTS, new DistrictSerializer());
  }
}
