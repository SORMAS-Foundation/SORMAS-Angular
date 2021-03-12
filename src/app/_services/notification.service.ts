import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { NotificationModalComponent } from '../shared/notification-modal/notification-modal.component';

declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private dialog: MatDialog) {}

  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }

  confirm(): Observable<any> {
    const dialogRef = this.dialog.open(NotificationModalComponent, {
      width: '800px',
      data: {
        confirm: false,
      },
    });

    return dialogRef.afterClosed();
  }

  warning(message: string): void {
    alertify.warning(message);
  }

  message(message: string): void {
    alertify.message(message);
  }
}
