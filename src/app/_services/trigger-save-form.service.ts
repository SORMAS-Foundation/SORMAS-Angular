import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Resource } from '../_models/resource';

@Injectable({ providedIn: 'root' })
export class TriggerSaveFormService {
  private subject = new Subject<any>();
  private subjectInputChange = new Subject<any>();

  setSave(resource: Resource): void {
    this.subject.next({ resource });
  }

  getSave(): Observable<any> {
    return this.subject.asObservable();
  }

  setInputChange(inputChange: boolean): void {
    this.subjectInputChange.next({ inputChange });
  }

  getInputChange(): Observable<any> {
    return this.subjectInputChange.asObservable();
  }
}
