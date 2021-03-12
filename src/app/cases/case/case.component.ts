import { Component, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { CaseClassificationIcons, CaseOutcomeIcons } from '../../app.constants';;
import { CaseService } from '../../_services/api/case.service';
import { ActivatedRoute } from '@angular/router';
import { CaseItem } from '../../_models/case';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  providers: [CaseControllerService],
})
export class CaseComponent implements OnInit {
  case: CaseItem | undefined;
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;

  caseId: any;

  constructor(
    private caseService: CaseService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.caseId = routeParams.caseId;

    this.caseService.getById(this.caseId).subscribe({
      next: (response: any) => {
        this.case = response;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {
      },
    });

    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;
  }
}
