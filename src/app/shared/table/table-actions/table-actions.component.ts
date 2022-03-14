import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BUTTON_TYPE } from '../../../app.constants';
import { TableColumn } from '../../../_models/common';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent {
  @Input() config: TableColumn;
  @Input() data: any;

  @Output() action: EventEmitter<any> = new EventEmitter();

  buttonType = BUTTON_TYPE;

  doAction(event: string): void {
    this.action.emit([this.data, event]);
  }
}
