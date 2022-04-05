import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class TravelEntryService extends BaseService<TravelEntryDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_TRAVEL_ENTRIES, new Serializer());
  }
}
