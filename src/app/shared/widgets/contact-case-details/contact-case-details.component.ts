import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ChooseCaseModalComponent } from '../../modals/choose-case-modal/choose-case-modal.component';
import { MODAL_MEDIUM_WIDTH } from '../../../_constants/common';
import { ContactService } from '../../../_services/api/contact.service';
import { NotificationService } from '../../../_services/notification.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-contact-case-details',
  templateUrl: './contact-case-details.component.html',
  styleUrls: ['./contact-case-details.component.scss'],
})
export class ContactCaseDetailsComponent implements OnDestroy {
  private subscription: Subscription[] = [];
  config: FormElementBase<any>;

  constructor(
    private dialog: MatDialog,
    public translateService: TranslateService,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {}

  openChooseCaseModal(): void {
    const dialogRef = this.dialog.open(ChooseCaseModalComponent, {
      width: MODAL_MEDIUM_WIDTH,
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.contactService.setCaseToContact(result.selectedCase, this.config.value).subscribe({
            next: () => {},
            error: (err: any) => {
              this.notificationService.error(err);
            },
            complete: () => {},
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
