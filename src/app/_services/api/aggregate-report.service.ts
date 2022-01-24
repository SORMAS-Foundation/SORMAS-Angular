import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { AggregateReportSerializer } from '../../_serializers/aggregate-report.serializer';

import * as constants from '../../app.constants';
import { AggregateReportDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class AggregateReportService extends BaseService<AggregateReportDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_AGGREGATE_REPORTS,
      new AggregateReportSerializer()
    );
  }
}
