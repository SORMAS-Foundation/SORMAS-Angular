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
    @Inject('any') private endpoint: any,
    @Inject('Serializer') private serializer: Serializer
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
    let requestPayload: any = { caseCriteria: null, sortProperties: null };

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

  add(item: T): Observable<T> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.ADD) {
      endpoint = this.endpoint.ADD;
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, item)
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  delete(item: T): any {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.DELETE) {
      endpoint = this.endpoint.DELETE;
    }

    return this.httpClient.delete(`${this.helperService.getApiUrl()}/${endpoint}/${item.id}`);
  }

  private convertData(data: any, withPagination: boolean): PaginationResponse {
    return withPagination
      ? { ...data, elements: data.elements.map((item: any) => this.serializer.fromJson(item)) }
      : this.serializer.fromJson(data);
  }
}
