import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { LabMessageDto } from '../../_models/labMessageDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class ExternalMessageService extends BaseService<LabMessageDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_EXTERNAL_MESSAGES, new Serializer());
  }
}
