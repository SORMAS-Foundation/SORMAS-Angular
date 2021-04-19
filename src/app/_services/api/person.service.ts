import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { PersonSerializer } from '../../_serializers/person.serializer';

import * as constants from '../../app.constants';
import { PersonDto } from '../../_models/models';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService<PersonDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '', constants.API_ROUTE_PERSONS, new PersonSerializer());
  }
}
