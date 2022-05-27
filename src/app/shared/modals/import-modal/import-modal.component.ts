import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ACTIONS_CASE } from '../../../app.constants';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss'],
})
export class ImportModalComponent implements OnDestroy {
  subscriptions: Subscription = new Subscription();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  get importGuideUrl(): string {
    let url = '';
    switch (this.data.type) {
      case ACTIONS_CASE.LINE_LISTING_IMPORT:
        url = '/SORMAS_Line_Listing_Import_Guide.pdf';
        break;
      case ACTIONS_CASE.DETAILED_IMPORT:
        url = '/SORMAS_Import_Guide.pdf';
        break;
      default:
    }
    return url;
  }

  import(): void {
    if (this.data.service) {
      this.subscriptions.add(
        this.data.service.import().subscribe((result: any) => {
          // eslint-disable-next-line no-console
          console.log(result);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
