import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { CaseSerializer } from '../../_serializers/case.serializer';
import { CaseItem } from '../../_models/case';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<CaseItem> {
  public endPoint = 'sormas-rest';

  constructor(httpClient: HttpClient) {
    super(httpClient, '', 'api/cases', new CaseSerializer());
  }

  getAllCases(pagination?: any, sorting?: any): Observable<any> {
    let paginationTmp = '';
    if (typeof pagination !== 'undefined') {
      paginationTmp = `?page=${pagination.page}&size=${pagination.size}`;
    }

    let sortingTmp = {};
    if (typeof sorting !== 'undefined') {
      sortingTmp = {
        caseCriteria: sorting.caseCriteria,
        sortProperties: sorting.sortProperties,
      };
    }
    return this.httpClient.post(`${this.endPoint}/cases/caseIndex${paginationTmp}`, sortingTmp);
  }

  getCaseById(): Observable<any> {
    return this.httpClient.post(`${this.endPoint}/cases/query`, {});
  }
}
