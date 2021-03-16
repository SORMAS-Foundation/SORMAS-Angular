import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DialogTypes,
  IconsMap,
  NOTIFICATION_ERROR_AUTO_CLOSE_DELAY,
  NOTIFICATION_MEESAGE_AUTO_CLOSE_DELAY,
  NOTIFICATION_SUCCESS_AUTO_CLOSE_DELAY,
  NOTIFICATION_WARNING_AUTO_CLOSE_DELAY,
} from '../app.constants';
import { DialogConfiguration } from '../_models/dialogConfiguration';
import { DialogService } from './dialog.service';

declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private dialogService: DialogService) {
    alertify.set('notifier', 'position', 'top-right');
  }

  success(message: string): void {
    alertify.success(message, NOTIFICATION_SUCCESS_AUTO_CLOSE_DELAY);
  }

  error(message: string): void {
    alertify.error(message, NOTIFICATION_ERROR_AUTO_CLOSE_DELAY);
  }

  warning(message: string): void {
    alertify.warning(message, NOTIFICATION_WARNING_AUTO_CLOSE_DELAY);
  }

  message(message: string): void {
    alertify.message(message, NOTIFICATION_MEESAGE_AUTO_CLOSE_DELAY);
  }

  confirm(alert: DialogConfiguration): Observable<any> {
    const dialogType = DialogTypes.Confirm;
    return this.dialogService.open({ ...alert, dialogType });
  }

  prompt(alert: DialogConfiguration): Observable<any> {
    const dialogType = DialogTypes.Prompt;
    return this.dialogService.open({ dialogType, ...alert });
  }

  alert(alert: DialogConfiguration): Observable<any> {
    const dialogType = DialogTypes.Alert;
    const titleIcon = IconsMap.DIALOG_ICON_TITLE_ALERT;
    return this.dialogService.open({ dialogType, titleIcon, ...alert });
  }
}
