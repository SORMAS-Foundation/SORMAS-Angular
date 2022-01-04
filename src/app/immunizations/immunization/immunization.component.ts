import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../_services/notification.service';
import { EntityLink, IMMUNIZATION_PROFILE_FORM_ID } from '../../app.constants';
import { HelperService } from '../../_services/helper.service';
import { ImmunizationDto } from '../../_models/immunizationDto';
import { ImmunizationService } from '../../_services/api/immunization.service';
import { actionsEditDefs } from './immunization-actions-data';

// immunization routing for tabs
const immunizationLinks = (immunizationId: string): EntityLink[] => {
  return [
    {
      link: `/immunizations/immunization/${immunizationId}/profile`,
      title: 'Immunization',
      showFormActions: true,
    },
    {
      link: `/immunizations/immunization/${immunizationId}/person`,
      title: 'Immunization person',
      showFormActions: true,
    },
  ];
};

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.scss'],
})
export class ImmunizationComponent implements OnInit, OnDestroy {
  immunization: ImmunizationDto;
  links: EntityLink[] = [];
  immunizationId: any;
  currentSubPage: EntityLink;
  actionEditOptions = actionsEditDefs;
  formId = IMMUNIZATION_PROFILE_FORM_ID;
  subscriptions: Subscription[] = [];

  constructor(
    public immunizationService: ImmunizationService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, immunizationLinks);
    this.immunizationId = routeParams.immunizationId;
    this.links = immunizationLinks(this.immunizationId);
    this.fetchImmunization();
  }

  fetchImmunization(): void {
    this.subscriptions.push(
      this.immunizationService.getById(this.immunizationId).subscribe({
        next: (response: any) => {
          this.immunization = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.immunization, this.immunizationService);
    }
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, immunizationLinks);
  }

  onImmunizationDelete(): void {
    this.router.navigate(['/immunizations/list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
