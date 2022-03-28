import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { CaseSerializer } from '../../_serializers/case.serializer';
import * as constants from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';
import { HelperService } from '../helper.service';
import { API_ROUTE_CASES } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<CaseDataDto> {
  export(type: string): Observable<any> {
    const endpoint: string = API_ROUTE_CASES.EXPORT;
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, {
      exportType: type,
    });
  }

  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_CASES, new CaseSerializer());
  }
}
