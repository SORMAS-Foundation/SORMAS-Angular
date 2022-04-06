import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CaseSerializer } from '../../_serializers/case.serializer';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ExportConfigurationDto } from '../../_models/models';

@Injectable({
  providedIn: 'root',
})
export class ImportExportService extends BaseService<ExportConfigurationDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_IMPORT_EXPORT, new CaseSerializer());
  }
}
