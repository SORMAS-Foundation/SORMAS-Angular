import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { DocumentDto } from '../../_models/documentDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class DocumentService extends BaseService<DocumentDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_DOCUMENTS, new Serializer());
  }

  getAll(entityUuid: string, entityType: string): Observable<any> {
    const endpoint = this.endpoint.GET_ALL ?? this.endpoint.ENDPOINT;
    const requestPayload: any = {
      criteria: {
        documentRelatedEntityType: entityType,
        entityUuids: [entityUuid],
      },
    };

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return this.serializer.fromJson(data);
        })
      );
  }
}
