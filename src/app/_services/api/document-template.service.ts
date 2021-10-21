import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { DocumentTemplateSerializer } from '../../_serializers/document-template.serializer';
import { DocumentDto } from '../../_models/documentDto';

@Injectable({
  providedIn: 'root',
})
export class DocumentTemplateService extends BaseService<DocumentDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_DOCUMENT_TEMPLATES,
      new DocumentTemplateSerializer()
    );
  }
}
