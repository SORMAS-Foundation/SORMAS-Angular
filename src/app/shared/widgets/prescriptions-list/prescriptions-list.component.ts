import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../_constants/common';
import { SendResourceService } from '../../../_services/send-resource.service';

@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.scss'],
})
export class PrescriptionsListComponent implements OnInit, OnDestroy {
  prescriptions: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.PRESCRIPTION_DATA) {
          this.prescriptions = response.resource || [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
