import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ContactDto } from '../../_models/contactDto';
import { ContactSerializer } from '../../_serializers/contact.serializer';

@Injectable({
  providedIn: 'root',
})
export class ContactFollowUpService extends BaseService<ContactDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_CONTACTS_FOLLOW_UP,
      new ContactSerializer()
    );
  }
}
