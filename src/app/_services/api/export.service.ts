import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serializer } from '../../_serializers/serializer';
import { HelperService } from '../helper.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ExportService extends BaseService<any> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', '', new Serializer());
  }
  export(type: string, url: string): Observable<any> {
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${url}`, {
      exportType: type,
    });
  }
}
