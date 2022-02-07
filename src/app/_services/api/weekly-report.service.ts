import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { WeeklyReportSerializer } from '../../_serializers/weekly-report.serializer';

import * as constants from '../../app.constants';
import { WeeklyReportDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class WeeklyReportService extends BaseService<WeeklyReportDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_WEEKLY_REPORTS,
      new WeeklyReportSerializer()
    );
  }
}
