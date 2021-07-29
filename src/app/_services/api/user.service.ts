import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { UserSerializer } from '../../_serializers/user.serializer';

import * as constants from '../../app.constants';
import { UserDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_USERS, new UserSerializer());
  }
}
