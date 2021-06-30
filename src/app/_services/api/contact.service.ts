import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ContactSerializer } from '../../_serializers/contact.serializer';
import { ContactDto } from '../../_models/contactDto';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService<ContactDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_CONTACTS, new ContactSerializer());
  }
}
