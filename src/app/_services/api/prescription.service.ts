import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { PrescriptionDto } from '../../_models/models';
import { HelperService } from '../helper.service';
import { PrescriptionSerializer } from '../../_serializers/prescription.serializer';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService extends BaseService<PrescriptionDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_PRESCRIPTIONS,
      new PrescriptionSerializer()
    );
  }
}
