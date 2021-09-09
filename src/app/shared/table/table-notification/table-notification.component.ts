import { Component, Input } from '@angular/core';
import { FetchStatus, FetchStatusType } from '../../../_models/common';

@Component({
  selector: 'app-table-notification',
  templateUrl: './table-notification.component.html',
  styleUrls: ['./table-notification.component.scss'],
})
export class TableNotificationComponent {
  @Input() type: FetchStatus | undefined;
  @Input() context: string;

  fetchStatusType = FetchStatusType;

  reloadPage(): void {
    window.location.reload();
  }
}
