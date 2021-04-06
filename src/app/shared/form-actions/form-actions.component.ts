import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { FormActionsService } from '../../_services/form-actions.service';
import { Resource } from '../../_models/resource';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
})
export class FormActionsComponent implements OnInit, OnDestroy {
  @Input() resource: Resource;

  hasInputsChanged = false;
  subscription: Subscription = new Subscription();
  subscriptionRoute: Subscription = new Subscription();

  constructor(
    private formActionsService: FormActionsService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    // @ts-ignore
    this.subscriptionRoute = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && this.hasInputsChanged) {
        this.notificationService
          .prompt({
            title: 'Are you sure you want to leave?',
            message: 'You will lose all changes that were made',
            buttonDeclineText: 'Cancel',
            buttonConfirmText: 'I am sure',
          })
          .subscribe((result) => {
            if (result) {
              if (result === 'CONFIRM') {
                this.formActionsService.setInputChange(false);
                this.router.navigate([event.url]);
              }
            }
          });
      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.formActionsService.getInputChange().subscribe((response: any) => {
      this.hasInputsChanged = response.inputChange;
    });
  }

  resetForm(): void {
    this.notificationService
      .prompt({
        title: 'Are you sure you want to discard your changes?',
        message: 'You will lose all changes that were made',
        buttonDeclineText: 'Cancel',
        buttonConfirmText: 'I am sure',
      })
      .subscribe((result) => {
        if (result) {
          if (result === 'CONFIRM') {
            this.formActionsService.setDiscard();
            this.hasInputsChanged = false;
          }
        }
      });
  }

  saveForm(): void {
    this.formActionsService.setSave(this.resource);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.subscriptionRoute) {
      this.subscriptionRoute.unsubscribe();
    }
  }
}
