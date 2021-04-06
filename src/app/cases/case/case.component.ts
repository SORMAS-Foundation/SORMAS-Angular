import { Component, OnDestroy, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../_services/notification.service';
import { CaseService } from '../../_services/api/case.service';
import { CaseClassificationIcons, CaseLink, CaseOutcomeIcons } from '../../app.constants';
import { caseLinks } from '../../_entity-data/case';
import { TriggerSaveFormService } from '../../_services/trigger-save-form.service';
import { CaseDataDto } from '../../_models/caseDataDto';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  providers: [CaseControllerService],
})
export class CaseComponent implements OnInit, OnDestroy {
  case: CaseDataDto;
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  links: CaseLink[] = [];
  caseId: any;
  subscription: Subscription = new Subscription();
  subscriptionRoute: Subscription = new Subscription();
  hasInputsChanged = false;

  constructor(
    private caseService: CaseService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private triggerSaveFormService: TriggerSaveFormService,
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
                this.triggerSaveFormService.setInputChange(false);
                this.router.navigate([event.url]);
              }
            }
          });
      }
    });
  }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.caseId = routeParams.caseId;
    this.links = caseLinks(this.caseId);
    this.caseService.getById(this.caseId).subscribe({
      next: (response: any) => {
        this.case = response;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });

    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;

    this.subscription = this.triggerSaveFormService.getInputChange().subscribe((response: any) => {
      this.hasInputsChanged = response.inputChange;
    });
  }

  saveForm(): void {
    this.triggerSaveFormService.setSave(this.case);
  }

  resetForm(): void {
    // eslint-disable-next-line no-console
    console.log('reset form');
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.case, this.caseService);
    }
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
