import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CaseDataDto } from '../../_models/models';
import * as constants from '../../app.constants';
import { DashboardNewCasesSerializer } from '../../_serializers/dashboard-new-cases.serializer';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardNewCasesService extends BaseService<CaseDataDto> {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_DASHBOARD_NEW_CASES,
      new DashboardNewCasesSerializer()
    );
  }
}
