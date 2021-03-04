import { Component, OnInit } from '@angular/core';
import { CaseControllerService, CaseDataDto } from 'api-client';
import { CaseClassificationIcons, CaseOutcomeIcons } from './icons-assignment';

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
  constructor(private caseService: CaseControllerService) {}

  async ngOnInit(): Promise<void> {
    const [caseData] = await this.caseService.getByUuids6([this.caseId]).toPromise();
    this.case = caseData;
    this.caseOutcomeIcons = CaseOutcomeIcons;
    this.caseClassificationIcons = CaseClassificationIcons;
  }
}
