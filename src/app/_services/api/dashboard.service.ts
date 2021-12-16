import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Resource } from '../../_models/resource';
import { Serializer } from '../../_serializers/base.serializer';

import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    protected httpClient: HttpClient,
    protected helperService: HelperService,
    @Inject('string') private url: string,
    @Inject('any') protected endpoint: any,
    @Inject('Serializer') protected serializer: Serializer
  ) {}

  getCalculated(filters?: any): Observable<Resource> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.GET_ALL) {
      endpoint = this.endpoint.GET_ALL;
    }

    const requestPayload: any = { criteria: {} };

    // filters
    if (typeof filters !== 'undefined' && filters !== null) {
      requestPayload.criteria = {};
      if (!filters.length) {
        requestPayload.criteria = {};
      }
      filters.forEach((filter: any) => {
        requestPayload.criteria[filter.field] = filter.value;
      });
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return this.convertData(data);
        })
      );
  }

  private convertData(data: any): Resource {
    return this.serializer.fromJson(data);
  }
}