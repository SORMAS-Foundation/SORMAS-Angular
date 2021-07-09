import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../_constants/common';
import { SendResourceService } from '../../../_services/send-resource.service';

@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.scss'],
})
export class PrescriptionsListComponent {
  prescriptions: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.PRESCRIPTION_DATA) {
        this.prescriptions = response.resource?.prescriptions || [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
