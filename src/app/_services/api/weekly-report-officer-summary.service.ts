import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { WeeklyReportSerializer } from '../../_serializers/weekly-report.serializer';

import * as constants from '../../app.constants';
import { WeeklyReportOfficerSummaryDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class WeeklyReportOfficerSummaryService extends BaseService<WeeklyReportOfficerSummaryDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_WEEKLY_REPORTS_OFFICER_SUMMARY,
      new WeeklyReportSerializer()
    );
  }
}
