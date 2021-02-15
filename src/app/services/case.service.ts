import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CaseControllerService, CaseDataDto } from 'api-client';
import { BaseDataService } from '../shared/http/BaseDataService';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseDataService {
  constructor(private caseService: CaseControllerService) {
    super();
  }

  getCasesData(): Observable<CaseDataDto[]> {
    // eslint-disable-next-line no-console
    return this.caseService.getAllCases(new Date(2020).getTime()).pipe(tap(console.log));
  }
}
