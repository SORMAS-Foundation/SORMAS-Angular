/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.51.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { AdditionalTestDto } from '../model/additionalTestDto';
import { PushResult } from '../model/pushResult';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class AdditionalTestControllerService {
  protected basePath = '/sormas-rest';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllActiveUuids(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
  public getAllActiveUuids(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<string>>>;
  public getAllActiveUuids(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<string>>>;
  public getAllActiveUuids(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Array<string>>('get', `${this.basePath}/additionaltests/uuids`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param since
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllAdditionalTests(
    since: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<AdditionalTestDto>>;
  public getAllAdditionalTests(
    since: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<AdditionalTestDto>>>;
  public getAllAdditionalTests(
    since: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<AdditionalTestDto>>>;
  public getAllAdditionalTests(
    since: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (since === null || since === undefined) {
      throw new Error(
        'Required parameter since was null or undefined when calling getAllAdditionalTests.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Array<AdditionalTestDto>>(
      'get',
      `${this.basePath}/additionaltests/all/${encodeURIComponent(String(since))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getByUuids1(
    body?: Array<string>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<AdditionalTestDto>>;
  public getByUuids1(
    body?: Array<string>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<AdditionalTestDto>>>;
  public getByUuids1(
    body?: Array<string>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<AdditionalTestDto>>>;
  public getByUuids1(
    body?: Array<string>,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json; charset=UTF-8'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Array<AdditionalTestDto>>(
      'post',
      `${this.basePath}/additionaltests/query`,
      {
        body: body,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postAdditionalTests(
    body?: Array<AdditionalTestDto>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<PushResult>>;
  public postAdditionalTests(
    body?: Array<AdditionalTestDto>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<PushResult>>>;
  public postAdditionalTests(
    body?: Array<AdditionalTestDto>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<PushResult>>>;
  public postAdditionalTests(
    body?: Array<AdditionalTestDto>,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json; charset=UTF-8'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Array<PushResult>>(
      'post',
      `${this.basePath}/additionaltests/push`,
      {
        body: body,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
