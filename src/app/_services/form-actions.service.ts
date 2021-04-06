import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Resource } from '../_models/resource';

@Injectable({ providedIn: 'root' })
export class FormActionsService {
  private subjectSave = new Subject<any>();
  private subjectInputChange = new Subject<any>();
  private subjectDiscard = new Subject<any>();

  setSave(resource: Resource): void {
    this.subjectSave.next({ resource });
  }

  getSave(): Observable<any> {
    return this.subjectSave.asObservable();
  }

  setInputChange(inputChange: boolean): void {
    this.subjectInputChange.next({ inputChange });
  }

  getInputChange(): Observable<any> {
    return this.subjectInputChange.asObservable();
  }

  setDiscard(): void {
    this.subjectDiscard.next({});
    this.subjectInputChange.next({ inputChange: false });
  }

  getDiscard(): Observable<any> {
    return this.subjectDiscard.asObservable();
  }
}
