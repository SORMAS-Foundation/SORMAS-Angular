import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactControllerService, ContactDto } from 'api-client';
import { BaseDataService } from '../shared/http/BaseDataService';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService extends BaseDataService {
  constructor(private contactsService: ContactControllerService) {
    super();
  }

  getContactsData(): Observable<ContactDto[]> {
    // eslint-disable-next-line no-console
    return this.contactsService.getAllContacts(new Date(2020).getTime()).pipe(tap(console.log));
  }
}
