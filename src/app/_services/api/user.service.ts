import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { UserDto } from '../../_models/models';
import { HelperService } from '../helper.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_USERS, new Serializer());
  }

  enable(users: string[]): Observable<any> {
    const endpoint = this.endpoint.ENABLE ?? this.endpoint.ENDPOINT;

    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, users);
  }

  disable(users: string[]): Observable<any> {
    const endpoint = this.endpoint.DISABLE ?? this.endpoint.ENDPOINT;

    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, users);
  }

  sync(): Observable<any> {
    const endpoint = this.endpoint.SYNC ?? this.endpoint.ENDPOINT;

    return this.httpClient.get(`${this.helperService.getApiUrl()}/${endpoint}`);
  }

  abortSync(): Observable<any> {
    const endpoint = this.endpoint.ABORT_SYNC ?? this.endpoint.ENDPOINT;

    return this.httpClient.get(`${this.helperService.getApiUrl()}/${endpoint}`);
  }
}
