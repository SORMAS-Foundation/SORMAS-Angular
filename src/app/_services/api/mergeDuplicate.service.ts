import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class MergeDuplicateService extends BaseService<MergeDuplicateDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_MERGE_DUPLICATES, new Serializer());
  }

  merge(uuid: string = ''): Observable<any> {
    const endpoint: string = `${this.endpoint.MERGE}`;

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, { uuid })
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }

  pick(uuid: string = ''): Observable<any> {
    const endpoint: string = `${this.endpoint.PICK}`;

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, { uuid })
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }
}
