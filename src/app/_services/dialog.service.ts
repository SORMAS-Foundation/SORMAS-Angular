import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DIALOG_MIN_WIDTH, DIALOG_MAX_WIDTH } from '../app.constants';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { DialogConfiguration } from '../_models/dialogConfiguration';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<DialogComponent>;

  public open(options: DialogConfiguration): Observable<any> {
    this.dialogRef = this.dialog.open(DialogComponent, {
      minWidth: options.minWidth ?? DIALOG_MIN_WIDTH,
      maxWidth: options.maxWidth ?? DIALOG_MAX_WIDTH,
      panelClass: options.dialogType ?? '',
      data: {
        dialogType: options.dialogType,
        title: options.title,
        titleIcon: options.titleIcon,
        message: options.message,
        buttonCancelText: options.buttonCancelText,
        buttonDeclineText: options.buttonDeclineText,
        buttonConfirmText: options.buttonConfirmText,
      },
    });

    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }
}
