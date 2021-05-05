import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { PersonSerializer } from '../../_serializers/person.serializer';

import * as constants from '../../app.constants';
import { PersonDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService<PersonDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_PERSONS, new PersonSerializer());
  }
}
