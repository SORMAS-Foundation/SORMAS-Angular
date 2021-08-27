import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CountrySerializer } from '../../_serializers/country.serializer';

import * as constants from '../../app.constants';
import { CountryDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<CountryDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_COUNTRIES, new CountrySerializer());
  }
}
