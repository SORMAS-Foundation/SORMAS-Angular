import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Resource } from '../_models/resource';

@Injectable({ providedIn: 'root' })
export class SendResourceService {
  private subject = new Subject<any>();

  setResource(resource: Resource): void {
    this.subject.next({ resource });
  }

  getResource(): Observable<Resource> {
    return this.subject.asObservable();
  }
}
