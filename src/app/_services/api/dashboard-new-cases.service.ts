import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../app.constants';
import { DashboardNewCasesSerializer } from '../../_serializers/dashboard-new-cases.serializer';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardNewCasesService extends DashboardService {
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
