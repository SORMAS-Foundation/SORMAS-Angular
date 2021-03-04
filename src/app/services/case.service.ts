import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaseControllerService, CaseDataDto } from 'api-client';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BaseDataService } from '../shared/http/BaseDataService';
import { Configuration } from '../../../projects/api-client/src/configuration';
import { Page } from './payloads/page';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseDataService {
  protected basePath = '/sormas-rest';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(private caseService: CaseControllerService, protected httpClient: HttpClient) {
    super();
  }

  getCasesData(since: number): Observable<CaseDataDto[]> {
    return this.caseService.getAllCases(since);
  }

  public getPaginatedCases(
    page: number,
    size: number,
    body?: object,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Page<CaseDataDto>>;
  public getPaginatedCases(
    page: number,
    size: number,
    body?: object,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Page<CaseDataDto>>>;
  public getPaginatedCases(
    page: number,
    size: number,
    body?: object,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Page<CaseDataDto>>>;
  public getPaginatedCases(
    page: number,
    size: number,
    body?: object,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json; charset=UTF-8'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    const httpParams = new HttpParams().append('page', String(page)).append('size', String(size));

    return this.httpClient.request<Page<CaseDataDto>>('post', `${this.basePath}/cases/caseIndex`, {
      body,
      withCredentials: this.configuration.withCredentials,
      headers,
      params: httpParams,
      observe,
      reportProgress,
    });
  }
}
