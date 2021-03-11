import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Resource } from '../../_models/resource';
import { Serializer } from '../../_serializers/base.serializer';

import * as constants from '../../app.constants';
import { PaginationResponse } from '../../_models/common';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends Resource> {
  private apiEndpoint = constants.API_ROUTE_MAIN;

  constructor(
    protected httpClient: HttpClient,
    @Inject('string') private url: string,
    @Inject('any') private endpoint: any,
    @Inject('Serializer') private serializer: Serializer
  ) {}

  getAll(pagination?: any, sorting?: any): Observable<PaginationResponse> {

    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.GET_ALL) {
      endpoint = this.endpoint.GET_ALL;
    }

    // pagination
    let paginationTmp = '';
    if (typeof pagination !== 'undefined') {
      paginationTmp = `?page=${pagination.page}&size=${pagination.size}`;
    }

    // sorting
    let sortingTmp = {};
    if (typeof sorting !== 'undefined') {
      sortingTmp = {
        caseCriteria: sorting.caseCriteria,
        sortProperties: sorting.sortProperties,
      };
    }

    return this.httpClient
      .post(`${this.url}/${this.apiEndpoint}/${endpoint}${paginationTmp}`, sortingTmp)
      .pipe(map((data: any) => this.convertData(data)));
  }

  getById(id: number | string): Observable<T> {
    // endpoint
    let endpoint = this.endpoint.ENDPOINT;
    if (this.endpoint.GET_BY_ID) {
      endpoint = this.endpoint.GET_BY_ID;
    }

    return this.httpClient
      .post(`${this.url}/${this.apiEndpoint}/${endpoint}`, [id])
      .pipe(map((data: any) => this.serializer.fromJson(data[0]) as T));
  }

  // toDO: for later

  // add(item: T): Observable<T> {
  //   return this.httpClient
  //     .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
  //     .pipe(map((data) => this.serializer.fromJson(data) as T));
  // }
  //
  // update(item: T): Observable<T> {
  //   return this.httpClient
  //     .put<T>(`${this.url}/${this.endpoint}/${item.id}`, this.serializer.toJson(item))
  //     .pipe(map((data) => this.serializer.fromJson(data) as T));
  // }
  //
  // delete(item: T): any {
  //   return this.httpClient.delete(`${this.url}/${this.endpoint}/${item.id}`);
  // }

  private convertData(data: any): PaginationResponse {
    // eslint-disable-next-line no-param-reassign
    data.elements = data.elements.map((item: any) => this.serializer.fromJson(item));
    return data;
  }
}
