import { Injectable } from '@angular/core';
import { NotificationModalComponent } from '../shared/notification-modal/notification-modal.component';
import {MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private dialog: MatDialog,
  ) {}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  confirm(): Observable<any> {
    const dialogRef = this.dialog.open(NotificationModalComponent, {
      width: '800px',
      data: {
        confirm: false
      }
    });

    return dialogRef.afterClosed();
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
