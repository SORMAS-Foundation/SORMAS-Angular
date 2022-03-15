import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE_EPI_DATA_CONTACT_CLASSIFICATION } from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DashboardEpiDataContactClassificationSerializer } from '../../_serializers/dashboard-epi-data-contact-classification.serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardEpiDataContactClassificationService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      API_ROUTE_EPI_DATA_CONTACT_CLASSIFICATION,
      new DashboardEpiDataContactClassificationSerializer()
    );
  }
}
