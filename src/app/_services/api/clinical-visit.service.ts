import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { ClinicalVisitSerializer } from '../../_serializers/clinical-visit.serializer';

import * as constants from '../../app.constants';
import { ClinicalVisitDto } from '../../_models/clinicalVisitDto';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class ClinicalVisitService extends BaseService<ClinicalVisitDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_CLINICAL_VISIT,
      new ClinicalVisitSerializer()
    );
  }
}
