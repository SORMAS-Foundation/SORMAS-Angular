import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { SampleDto } from '../../_models/sampleDto';
import { HelperService } from '../helper.service';
import { SampleSerializer } from '../../_serializers/sample.serializer';

@Injectable({
  providedIn: 'root',
})
export class SampleService extends BaseService<SampleDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_SAMPLES, new SampleSerializer());
  }
}
