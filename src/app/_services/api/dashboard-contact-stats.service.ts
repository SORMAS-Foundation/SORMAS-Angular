import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DashboardContactStatsSerializer } from '../../_serializers/dashboard-contact-stats.serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardContactStatsService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_DASHBOARD_CONTACT_STATS,
      new DashboardContactStatsSerializer()
    );
  }
}
