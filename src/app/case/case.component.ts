import { Component, OnInit } from '@angular/core';
import { CaseControllerService, CaseDataDto } from 'api-client';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  case: CaseDataDto | undefined;
  caseId = 'R674FI-J5G2Z7-GOEVQR-WAQCCKGM'; // todo - get from Route

  constructor(private caseService: CaseControllerService) {}

  async ngOnInit(): Promise<void> {
    const [caseData] = await this.caseService.getByUuids6([this.caseId]).toPromise();
    this.case = caseData;

    // this.case!.person.lastName
  }
}
