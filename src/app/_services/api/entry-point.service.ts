import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { PointOfEntryDto } from '../../_models/pointOfEntryDto';
import { EntryPointSerializer } from '../../_serializers/entry-point.serializer';

@Injectable({
  providedIn: 'root',
})
export class EntryPointService extends BaseService<PointOfEntryDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_ENTRY_POINTS,
      new EntryPointSerializer()
    );
  }
}
