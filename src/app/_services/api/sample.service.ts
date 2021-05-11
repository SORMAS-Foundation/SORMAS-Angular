import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { EventSerializer } from '../../_serializers/event.serializer';

import * as constants from '../../app.constants';
import { SampleDto } from '../../_models/sampleDto';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class SampleService extends BaseService<SampleDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_SAMPLES, new EventSerializer());
  }
}
