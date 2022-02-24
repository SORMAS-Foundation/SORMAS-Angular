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

  private fieldsArray: { [key: string]: string[] } = {};

  setSave(formId: string, resource: Resource | null, multiple = true): void {
    this.subjectSave.next({ formId, resource, multiple });
  }

  getSave(): Observable<any> {
    return this.subjectSave.asObservable();
  }

  setInputChange(formId: string, field: string, isInputChanged: boolean): void {
    if (isInputChanged) {
      if (!this.fieldsArray[formId]) {
        this.fieldsArray[formId] = [];
      }
      this.fieldsArray[formId].push(field);
    } else if (this.fieldsArray[formId]?.includes(field)) {
      this.fieldsArray[formId] = this.fieldsArray[formId].filter((item) => item !== field);
    }
    this.subjectInputChange.next({ formId, inputChange: this.fieldsArray[formId].length });
  }

  resetInputChange(formId: string): void {
    this.fieldsArray[formId] = [];
    this.subjectInputChange.next({ formId, inputChange: false });
  }

  getInputChange(): Observable<any> {
    return this.subjectInputChange.asObservable();
  }

  setInputValue(formId: string, key: string, value: any): void {
    this.subjectInputValue.next({ formId, key, value });
  }

  getInputValue(): Observable<any> {
    return this.subjectInputValue.asObservable();
  }

  setDiscard(formId: string): void {
    this.fieldsArray[formId] = [];
    this.subjectDiscard.next({ formId });
    this.subjectInputChange.next({ formId, inputChange: false });
  }

  getDiscard(): Observable<any> {
    return this.subjectDiscard.asObservable();
  }

  setCloseFormModal(formId: string, closeModal: boolean, requestResponse: any = null): void {
    this.subjectModal.next({ formId, closeModal, requestResponse });
  }

  getCloseFormModal(): Observable<any> {
    return this.subjectModal.asObservable();
  }
}
