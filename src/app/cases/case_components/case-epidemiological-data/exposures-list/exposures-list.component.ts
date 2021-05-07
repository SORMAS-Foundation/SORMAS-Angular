import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../../app.constants';
import { SendResourceService } from '../../../../_services/send-resource.service';

@Component({
  selector: 'app-exposures-list',
  templateUrl: './exposures-list.component.html',
  styleUrls: ['./exposures-list.component.scss'],
})
export class ExposuresListComponent implements OnInit, OnDestroy {
  exposures: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.EPIDEMIOLOGICAL_DATA) {
        this.exposures = response.resource?.epiData?.exposures || [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
