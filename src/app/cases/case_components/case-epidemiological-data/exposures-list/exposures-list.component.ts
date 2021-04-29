import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../../app.constants';
import { CaseDataDto, TypeOfPlace } from '../../../../_models/models';
import { SendResourceService } from '../../../../_services/send-resource.service';

@Component({
  selector: 'app-exposures-list',
  templateUrl: './exposures-list.component.html',
  styleUrls: ['./exposures-list.component.scss'],
})
export class ExposuresListComponent implements OnInit, OnDestroy {
  case: CaseDataDto;
  caseId: any;
  exposures: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.EPIDEMIOLOGICAL_DATA) {
        this.exposures = response.resource?.epiData?.exposures || [];
        this.setExposuresData(this.exposures);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setExposuresData(exposures: any[]): void {
    this.exposures = [];
    exposures.forEach((exposure: any) => {
      const newExposure = {
        epidTitle: exposure.exposureType,
        typeOfPlace: exposure.typeOfPlace as TypeOfPlace,
        priority: 'NORMAL',
        startDate: new Date(exposure.startDate),
        endDate: new Date(exposure.endDate),
        description: exposure.description,
        contactToCase: exposure.contactToCase,
        location: exposure.location,
      };
      this.exposures.push(newExposure);
    });
  }
}
