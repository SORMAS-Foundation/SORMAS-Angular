import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filter } from '../_models/common';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private subject = new Subject<any>();

  setFilters(filters: Filter[]): void {
    this.subject.next({ filters });
  }

  getFilters(): Observable<Filter[]> {
    return this.subject.asObservable();
  }
}
