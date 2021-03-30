import { Component, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { ActivatedRoute } from '@angular/router';
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
export class CaseComponent implements OnInit {
  case: CaseDataDto;
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  links: CaseLink[] = [];
  caseId: any;

  constructor(
    private caseService: CaseService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private triggerSaveFormService: TriggerSaveFormService
  ) {}

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
}
