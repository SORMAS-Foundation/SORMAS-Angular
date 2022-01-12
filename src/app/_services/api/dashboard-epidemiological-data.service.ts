import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE_EPIDEMIOLOGICAL_DATA } from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DashboardEpidemiologicalDataSerializer } from '../../_serializers/dashboard-epidemiological-data.serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardEpidemiologicalDataService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      API_ROUTE_EPIDEMIOLOGICAL_DATA,
      new DashboardEpidemiologicalDataSerializer()
    );
  }
}
