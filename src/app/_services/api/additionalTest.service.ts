import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { AdditionalTestDto } from '../../_models/models';
import { HelperService } from '../helper.service';
import { AdditionalTestSerializer } from '../../_serializers/additional-test.serializer';

@Injectable({
  providedIn: 'root',
})
export class AdditionalTestService extends BaseService<AdditionalTestDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_ADDITIONAL_TESTS,
      new AdditionalTestSerializer()
    );
  }
}
