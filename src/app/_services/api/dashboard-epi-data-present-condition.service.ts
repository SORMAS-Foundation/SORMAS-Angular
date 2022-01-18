import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE_EPI_DATA_PRESENT_CONDITION } from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DashboardEpiDataPresentConditionSerializer } from '../../_serializers/dashboard-epi-data-present-condition.serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardEpiDataPresentConditionService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      API_ROUTE_EPI_DATA_PRESENT_CONDITION,
      new DashboardEpiDataPresentConditionSerializer()
    );
  }
}
