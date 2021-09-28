import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Resource } from '../_models/resource';

@Injectable({ providedIn: 'root' })
export class FormActionsService {
  private subjectSave = new Subject<any>();
  private subjectInputChange = new Subject<any>();
  private subjectDiscard = new Subject<any>();
  private subjectInputValue = new Subject<any>();
  private subjectModal = new Subject<any>();

  private fieldsArray: string[] = [];

  setSave(resource: Resource | null): void {
    this.subjectSave.next({ resource });
  }

  getSave(): Observable<any> {
    return this.subjectSave.asObservable();
  }

  setInputChange(field: string, isInputChanged: boolean): void {
    if (isInputChanged) {
      this.fieldsArray.push(field);
    } else if (this.fieldsArray.includes(field)) {
      this.fieldsArray = this.fieldsArray.filter((item) => item !== field);
    }
    this.subjectInputChange.next({ inputChange: this.fieldsArray.length });
  }

  resetInputChange(): void {
    this.fieldsArray = [];
    this.subjectInputChange.next({ inputChange: false });
  }

  getInputChange(): Observable<any> {
    return this.subjectInputChange.asObservable();
  }

  setInputValue(key: string, value: any): void {
    this.subjectInputValue.next({ key, value });
  }

  getInputValue(): Observable<any> {
    return this.subjectInputValue.asObservable();
  }

  setDiscard(): void {
    this.fieldsArray = [];
    this.subjectDiscard.next({});
    this.subjectInputChange.next({ inputChange: false });
  }

  getDiscard(): Observable<any> {
    return this.subjectDiscard.asObservable();
  }

  setCloseFormModal(closeModal: boolean): void {
    this.subjectModal.next({ closeModal });
  }

  getCloseFormModal(): Observable<any> {
    return this.subjectModal.asObservable();
  }
}
