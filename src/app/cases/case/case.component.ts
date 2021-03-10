import { Component, OnInit } from '@angular/core';
import { CaseControllerService, CaseDataDto } from 'api-client';
import { CaseClassificationIcons, CaseOutcomeIcons } from './icons-assignment';
import { CaseService } from '../../_services/api/case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  providers: [CaseControllerService],
})
export class CaseComponent implements OnInit {
  case: CaseDataDto | undefined;
  caseId = 'W5GUPC-LBYRTF-XM2B6S-VEZXSJJU'; // todo - get from Route when verview page is ready
  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  constructor(private caseService: CaseService) {}

  async ngOnInit(): Promise<void> {
    this.caseService.getCaseById().subscribe({
      next: (response: any) => {
        console.log('responseresponseresponse', response);
      },
      error: (err: any) => {
        console.log('errrrrrr', err);
      },
      complete: () => {
        console.log('errrrrrr');
      },
    });

    // const [caseData] = await this.caseService.getByUuids6([this.caseId]).toPromise();
    // this.case = caseData;
    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;
  }
}
