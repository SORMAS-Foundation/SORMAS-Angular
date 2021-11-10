import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../_services/notification.service';
import { ACTIONS_CASE_EDIT } from '../../app.constants';
import { actionsEditDefs } from './entity-actions-data';
import { NavItem } from '../../_models/common';

@Component({
  selector: 'app-entity-actions',
  templateUrl: './entity-actions.component.html',
  styleUrls: ['./entity-actions.component.scss'],
})
export class EntityActionsComponent implements OnDestroy {
  @Input() resource: any;
  @Input() resourceService: any;
  @Input() actionEditOptions: NavItem[] = actionsEditDefs;
  @Input() context = 'Item';

  @Output() completion: EventEmitter<boolean> = new EventEmitter();

  subscriptions: Subscription[] = [];

  constructor(
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_CASE_EDIT.ARCHIVE:
        break;
      case ACTIONS_CASE_EDIT.DELETE:
        this.announceDeleteEntity();
        break;
      default:
    }
  }

  announceDeleteEntity(): void {
    this.notificationService
      .confirm({
        title: this.translateService.instant('strings.headingConfirmDeletion'),
        message: this.translateService
          .instant('strings.confirmationDeleteEntity')
          .replace('%s', this.context),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionDelete'),
      })
      .subscribe((action) => {
        if (action === 'CONFIRM') {
          this.deleteEntity();
        }
      });
  }

  deleteEntity(): void {
    if (!this.resource.uuid) {
      return;
    }
    const items = [this.resource.uuid];
    this.subscriptions.push(
      this.resourceService.delete(items).subscribe((response: any) => {
        if (response.length) {
          this.completion.emit(true);
          this.notificationService.success(
            this.translateService.instant('messageEntityDeleted', {
              entity: this.context,
            })
          );
        } else {
          this.notificationService.error(
            this.translateService.instant('messageEntityNotDeleted', {
              entity: this.context,
            })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
