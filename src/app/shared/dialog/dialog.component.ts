import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogTypes, IconsMap } from '../../app.constants';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  iconClose = IconsMap.DIALOG_ICON_CLOSE;
  showActions = false;
  buttonCancelColor = 'warn';
  buttonConfirmColor = 'primary';
  buttonDeclineColor = 'primary';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dialogType: string;
      title: string;
      titleIcon: string;
      message: string;
      buttonCancelText: string;
      buttonDeclineText: string;
      buttonConfirmText: string;
    },
    private mdDialogRef: MatDialogRef<DialogComponent>
  ) {
    if (data.dialogType === DialogTypes.Confirm) {
      this.buttonConfirmColor = 'warn';
    }
    this.showActions = !!(
      data.buttonCancelText ||
      data.buttonConfirmText ||
      data.buttonDeclineText
    );
  }

  public close(value: any): void {
    this.mdDialogRef.close(value);
  }
}
