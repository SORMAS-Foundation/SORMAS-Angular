import { Component, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../_services/notification.service';
import { CaseService } from '../../_services/api/case.service';
import { CaseClassificationIcons, EntityLink, CaseOutcomeIcons } from '../../app.constants';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CaseOrigin } from '../../_models/caseOrigin';

// case routing for tabs
const caseLinks = (caseId: string): EntityLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'strings.entityCase' },
    { link: `/cases/case/${caseId}/person`, title: 'captions.View.cases.person' },
    { link: `/cases/case/${caseId}/hospitalization`, title: 'captions.CaseHospitalization' },
    { link: `/cases/case/${caseId}/port-health`, title: 'captions.CaseData.portHealthInfo' },
    { link: `/cases/case/${caseId}/symptoms`, title: 'captions.Symptoms' },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: 'captions.EpiData' },
    { link: `/cases/case/${caseId}/therapy`, title: 'captions.CaseData.therapy' },
    { link: `/cases/case/${caseId}/follow-up`, title: 'captions.caseFollowupVisitsView' },
    { link: `/cases/case/${caseId}/clinical-course`, title: 'captions.View.cases.clinicalcourse' },
    { link: `/cases/case/${caseId}/contacts`, title: 'captions.caseContacts' },
  ];
};

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  providers: [CaseControllerService],
})
export class CaseComponent implements OnInit {
  case: CaseDataDto;
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  links: EntityLink[] = [];
  caseId: any;

  constructor(
    private caseService: CaseService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.caseId = routeParams.caseId;
    this.links = caseLinks(this.caseId);
    this.caseService.getById(this.caseId).subscribe({
      next: (response: any) => {
        this.case = response;
        this.updateCaseLinks();
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });

    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;
  }

  updateCaseLinks(): void {
    if (this.case.caseOrigin === CaseOrigin.INCOUNTRY) {
      this.links = this.links.filter((item) => {
        return !item.link.includes('port-health');
      });
    }
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.case, this.caseService);
    }
  }
}
