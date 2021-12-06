import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filter } from '../_models/common';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private subject = new Subject<any>();

  setFilters(filters: Filter[], formId: string = ''): void {
    this.subject.next({ filters, formId });
  }

  getFilters(): Observable<any> {
    return this.subject.asObservable();
  }
}
