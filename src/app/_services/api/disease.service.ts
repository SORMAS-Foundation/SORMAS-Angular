import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { BaseService } from './base.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService extends BaseService<any> {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_DISEASES, new Serializer());
  }
}
