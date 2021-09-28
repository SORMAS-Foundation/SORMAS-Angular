import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ChooseCaseModalComponent } from '../../modals/choose-case-modal/choose-case-modal.component';
import { MODAL_MEDIUM_WIDTH } from '../../../_constants/common';

@Component({
  selector: 'app-contact-case-details',
  templateUrl: './contact-case-details.component.html',
  styleUrls: ['./contact-case-details.component.scss'],
})
export class ContactCaseDetailsComponent implements OnDestroy {
  private subscription: Subscription[] = [];

  constructor(private dialog: MatDialog, private translateService: TranslateService) {}

  openChooseCaseModal(): void {
    const dialogRef = this.dialog.open(ChooseCaseModalComponent, {
      width: MODAL_MEDIUM_WIDTH,
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('result');
        }
        console.log('result2222');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
