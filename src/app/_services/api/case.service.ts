import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';
import { HelperService } from '../helper.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<CaseDataDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_CASES, new Serializer());
  }

  searchSpecific(uuid: string = ''): Observable<any> {
    const endpoint: string = `${this.endpoint.SEARCH}/${uuid}`;

    return this.httpClient
      .get(`${this.helperService.getApiUrl()}/${endpoint}`)
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }
}
