import { Component, HostListener, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../_services/notification.service';
import { CaseService } from '../../_services/api/case.service';
import { CaseClassificationIcons, CaseLink, CaseOutcomeIcons } from '../../app.constants';
import { caseLinks } from '../../_entity-data/case';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CaseOrigin } from '../../_models/caseOrigin';

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
  links: CaseLink[] = [];
  caseId: any;
  fixedHeader = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.fixedHeader = window.pageYOffset > 71;
  }

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
