import { Component, OnInit } from '@angular/core';
import { CaseControllerService } from 'api-client';
import { CaseClassificationIcons, CaseOutcomeIcons } from '../../app.constants';;
import { CaseService } from '../../_services/api/case.service';
import { ActivatedRoute } from '@angular/router';
import { CaseItem } from '../../_models/case';

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

  constructor(private caseService: CaseService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    // this.caseId = routeParams.caseId;
    this.caseId = "W5GUPC-LBYRTF-XM2B6S-VEZXSJJU";

    this.caseService.getById(this.caseId).subscribe({
      next: (response: any) => {
        this.case = response;
      },
      error: (err: any) => {
        console.log('errrrrrr', err);
      },
      complete: () => {
      },
    });

    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;
  }
}
