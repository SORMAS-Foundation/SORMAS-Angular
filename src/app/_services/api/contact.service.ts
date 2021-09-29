import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ContactSerializer } from '../../_serializers/contact.serializer';
import { ContactDto } from '../../_models/contactDto';
import { CaseDataDto } from '../../_models/caseDataDto';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService<ContactDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_CONTACTS, new ContactSerializer());
  }

  setCaseToContact(caseItem: CaseDataDto, contactUuid: string): Observable<any> {
    // endpoint
    const endpoint = `${constants.API_ROUTE_CONTACTS.ENDPOINT}/set-case`;

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, {
        caseItem,
        contactUuid,
      })
      .pipe(map((data) => data));
  }
}
