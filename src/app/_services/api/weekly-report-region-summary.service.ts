import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { WeeklyReportSerializer } from '../../_serializers/weekly-report.serializer';

import * as constants from '../../app.constants';
import { WeeklyReportRegionSummaryDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class WeeklyReportRegionSummaryService extends BaseService<WeeklyReportRegionSummaryDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_WEEKLY_REPORTS_REGION_SUMMARY,
      new WeeklyReportSerializer()
    );
  }
}
