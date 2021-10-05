import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ChooseCaseModalComponent } from '../../modals/choose-case-modal/choose-case-modal.component';
import { ADD_MODAL_MAX_WIDTH, MODAL_MEDIUM_WIDTH } from '../../../_constants/common';
import { NotificationService } from '../../../_services/notification.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { AddEditBaseModalComponent } from '../../modals/add-edit-base-modal/add-edit-base-modal.component';
import { CaseAddComponent } from '../../case-add/case-add.component';

@Component({
  selector: 'app-contact-case-details',
  templateUrl: './contact-case-details.component.html',
  styleUrls: ['./contact-case-details.component.scss'],
})
export class ContactCaseDetailsComponent implements OnDestroy {
  private subscription: Subscription[] = [];
  config: FormElementBase<any>;
  group: FormGroup;

  constructor(
    private dialog: MatDialog,
    public translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  openChooseCaseModal(): void {
    const data = {
      selectedUuid: null,
    };
    if (this.config.value) {
      data.selectedUuid = this.config.value;
    }
    const dialogRef = this.dialog.open(ChooseCaseModalComponent, {
      width: MODAL_MEDIUM_WIDTH,
      data,
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.config.value = {
            uuid: result.selectedCase.uuid,
          };
          this.group.patchValue({ caze: this.config.value });
        }
      })
    );
  }

  openAddCaseModal(): void {
    console.log('configconfigconfigconfig', this.config);
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('captions.caseCreateNew'),
        component: CaseAddComponent,
        resource: {
          firstName: this.config.resource.person.firstName,
          lastName: this.config.resource.person.lastName,
        },
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  removeCase(): void {
    this.notificationService
      .prompt({
        title: this.translateService.instant('strings.headingRemoveCaseFromContact'),
        message: this.translateService.instant(
          'strings.confirmationContactSourceCaseDiscardUnsavedChanges'
        ),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionConfirm'),
      })
      .subscribe((result) => {
        if (result) {
          if (result === 'CONFIRM') {
            this.config.value = null;
            this.group.patchValue({ caze: this.config.value });
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
