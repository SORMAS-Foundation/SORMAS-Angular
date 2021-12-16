import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Resource } from '../../_models/resource';
import { Serializer } from '../../_serializers/base.serializer';

import { PaginationResponse } from '../../_models/common';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends Resource> {
  constructor(
    protected httpClient: HttpClient,
    protected helperService: HelperService,
    @Inject('string') private url: string,
    @Inject('any') protected endpoint: any,
    @Inject('Serializer') protected serializer: Serializer
  ) {}

  getAll(
    pagination?: any,
    sorting?: any,
    filters?: any,
    withPagination: boolean = true
  ): Observable<PaginationResponse> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.GET_ALL) {
      endpoint = this.endpoint.GET_ALL;
    }

    // pagination
    let paginationTmp = '';
    if (typeof pagination !== 'undefined' && pagination !== null) {
      paginationTmp = `?offset=${pagination.offset}&size=${pagination.size}`;
    } else {
      paginationTmp = `?offset=0&size=99999`;
    }

    // sorting
    let requestPayload: any = { criteria: {}, sortProperties: null };

    if (typeof sorting !== 'undefined' && sorting !== null) {
      requestPayload = {
        criteria: null,
        sortProperties: [
          {
            propertyName: sorting.field,
            ascending: sorting.ascending,
          },
        ],
      };
    }

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
      .post(`${this.helperService.getApiUrl()}/${endpoint}${paginationTmp}`, requestPayload)
      .pipe(
        map((data: any) => {
          return this.convertData(data, withPagination);
        })
      );
  }

  getById(id: number | string): Observable<T> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.GET_BY_ID) {
      endpoint = this.endpoint.GET_BY_ID;
    }

    return this.httpClient
      .get(`${this.helperService.getApiUrl()}/${endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  update(items: T[]): Observable<T> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.UPDATE) {
      endpoint = this.endpoint.UPDATE;
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, [items])
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  add(items: T[]): Observable<T> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.ADD) {
      endpoint = this.endpoint.ADD;
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, items)
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  delete(items: string[]): Observable<any> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.DELETE) {
      endpoint = this.endpoint.DELETE;
    }

    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, items);
  }

  getAllAsOptions(filters: any): Observable<any> {
    return this.getAll(null, null, filters).pipe(
      map((data: any) => {
        return data.elements.map((item: any) => ({
          key: item.uuid,
          value: item.name || item.displayName,
        }));
      })
    );
  }

  private convertData(data: any, withPagination: boolean): PaginationResponse {
    return withPagination
      ? { ...data, elements: data.elements.map((item: any) => this.serializer.fromJson(item)) }
      : this.serializer.fromJson(data);
  }
}
