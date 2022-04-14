import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class MergeDuplicateContactService extends BaseService<MergeDuplicateDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_MERGE_DUPLICATES_CONTACT,
      new Serializer()
    );
  }
}
