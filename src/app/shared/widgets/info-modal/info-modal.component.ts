import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MODAL_NARROW_WIDTH } from '../../../app.constants';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent {
  config: FormElementBase<string>;
  group: FormGroup;

  constructor(private dialog: MatDialog) {}

  showInfo(): void {
    this.dialog.open(this.config?.widgetInfo?.component, {
      width: MODAL_NARROW_WIDTH,
    });
  }
}
