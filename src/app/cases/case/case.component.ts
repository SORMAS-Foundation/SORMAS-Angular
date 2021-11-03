import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../_services/notification.service';
import { CaseService } from '../../_services/api/case.service';
import { CaseClassificationIcons, EntityLink, CaseOutcomeIcons } from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CaseOrigin } from '../../_models/caseOrigin';
import { HelperService } from '../../_services/helper.service';
import { actionsEditDefs } from './case-actions-data';

// case routing for tabs
const caseLinks = (caseId: string): EntityLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'strings.entityCase', showFormActions: true },
    {
      link: `/cases/case/${caseId}/person`,
      title: 'captions.View.cases.person',
      showFormActions: true,
    },
    {
      link: `/cases/case/${caseId}/hospitalization`,
      title: 'captions.CaseHospitalization',
      showFormActions: true,
    },
    {
      link: `/cases/case/${caseId}/port-health`,
      title: 'captions.CaseData.portHealthInfo',
      showFormActions: true,
    },
    { link: `/cases/case/${caseId}/symptoms`, title: 'captions.Symptoms', showFormActions: true },
    {
      link: `/cases/case/${caseId}/epidemiological-data`,
      title: 'captions.EpiData',
      showFormActions: true,
    },
    { link: `/cases/case/${caseId}/therapy`, title: 'captions.CaseData.therapy' },
    {
      link: `/cases/case/${caseId}/follow-up`,
      title: 'captions.caseFollowupVisitsView',
    },
    {
      link: `/cases/case/${caseId}/clinical-course`,
      title: 'captions.View.cases.clinicalcourse',
      showFormActions: true,
    },
    { link: `/cases/case/${caseId}/contacts`, title: 'captions.caseContacts' },
  ];
};

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit, OnDestroy {
  case: CaseDataDto;
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  links: EntityLink[] = [];
  caseId: any;
  currentSubPage: EntityLink;
  actionEditOptions = actionsEditDefs;
  subscriptions: Subscription[] = [];

  constructor(
    public caseService: CaseService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, caseLinks);
    this.caseId = routeParams.caseId;
    this.links = caseLinks(this.caseId);
    this.fetchCase();
  }

  fetchCase(): void {
    this.subscriptions.push(
      this.caseService.getById(this.caseId).subscribe({
        next: (response: any) => {
          this.case = response;
          this.updateCaseLinks();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  updateCaseLinks(): void {
    if (this.case.caseOrigin === CaseOrigin.IN_COUNTRY) {
      this.links = this.links.filter((item) => {
        return !item.link.includes('port-health');
      });
    }
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.case, this.caseService);
    }
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, caseLinks);
  }

  onCaseDelete(): void {
    this.router.navigate(['/cases/list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
