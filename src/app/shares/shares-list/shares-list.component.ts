import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './shares-list-table-data';
import {
  ADD_MODAL_MAX_WIDTH,
  ADD_MODAL_WIDE,
  CONFIG_SHARE_REQUESTS,
  SHARE_REQUEST_FILTERS_FORM_ID,
} from '../../app.constants';
import { ShareRequestService } from '../../_services/api/share-request.service';
import { ShareDetailsComponent } from '../share-details/share-details.component';
import { SormasToSormasShareRequestIndexDto } from '../../_models/sormasToSormasShareRequestIndexDto';
import { ShareRejectComponent } from '../share-reject/share-reject.component';

@Component({
  selector: 'app-shares-list',
  templateUrl: './shares-list.component.html',
  styleUrls: ['./shares-list.component.scss'],
})
export class SharesListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  configKey = CONFIG_SHARE_REQUESTS;
  formId = SHARE_REQUEST_FILTERS_FORM_ID;
  subscriptions: Subscription[] = [];

  constructor(public shareRequestService: ShareRequestService, private dialog: MatDialog) {}

  showShareRequest(shareRequest: any): void {
    const dialogRef = this.dialog.open(ShareDetailsComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      width: `calc(${ADD_MODAL_MAX_WIDTH} - 24px)`,
      data: {
        shareRequest,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  doRowAction([shareRequest, action]: [SormasToSormasShareRequestIndexDto, string]): void {
    if (action === 'REJECT') {
      const dialogRef = this.dialog.open(ShareRejectComponent, {
        width: ADD_MODAL_WIDE,
        data: {
          shareRequest,
        },
      });

      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            // callback
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
