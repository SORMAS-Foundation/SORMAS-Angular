import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ImmunizationDto } from '../../_models/immunizationDto';
import { ImmunizationSerializer } from '../../_serializers/immunization.serializer';

@Injectable({
  providedIn: 'root',
})
export class ImmunizationService extends BaseService<ImmunizationDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_IMMUNIZATIONS,
      new ImmunizationSerializer()
    );
  }
}
