import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormActionsService } from '../_services/form-actions.service';

@Injectable({ providedIn: 'root' })
export class LeaveGuard implements CanDeactivate<any> {
  constructor(private formActionsService: FormActionsService) {}

  canDeactivate(): Observable<boolean> | boolean {
    const subject = new Subject<boolean>();
    setTimeout(() => {
      this.formActionsService
        .getInputChange()
        .pipe(take(1))
        .subscribe((changes) => {
          subject.next(!changes?.inputChange);
          subject.complete();
        });
    });
    return subject.asObservable().pipe(take(1));
  }
}
