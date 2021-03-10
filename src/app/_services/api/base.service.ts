import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Resource } from '../../_models/resource';
import { Serializer } from '../../_serializers/base.serializer';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends Resource> {
  constructor(
    protected httpClient: HttpClient,
    @Inject('string') private url: string,
    @Inject('string') private endpoint: string,
    @Inject('Serializer') private serializer: Serializer
  ) {}

  add(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`, this.serializer.toJson(item))
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  getById(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  getAll(limit?: number, offset?: number, filters?: any): Observable<any> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}${this.toQueryString(limit, offset, filters)}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  delete(item: T): any {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${item.id}`);
  }

  public toQueryString(limit: any, offset: any, filters: any): string {
    let finalString = '';

    if (
      (typeof limit !== undefined && limit !== null) ||
      (typeof offset !== undefined && offset !== null) ||
      filters
    ) {
      finalString = '?';
    }

    if (typeof limit !== undefined && limit !== null) {
      finalString = `${finalString}limit=${limit}`;
    }

    if (typeof offset !== undefined && offset !== null) {
      finalString = `${finalString}&offset=${offset}`;
    }

    if (filters) {
      if (
        typeof limit !== undefined &&
        limit !== null &&
        typeof offset !== undefined &&
        offset !== null
      ) {
        finalString += '&';
      }
      finalString += Object.keys(filters)
        .map((key) => `${key}=${filters[key]}`)
        .join('&');
    }

    return finalString;
  }

  public convertData(data: any): T[] {
    // eslint-disable-next-line no-param-reassign
    data.rows = data.rows.map((item: any) => this.serializer.fromJson(item));
    return data;
  }
}
