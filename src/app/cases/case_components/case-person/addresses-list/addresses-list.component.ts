import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../../app.constants';
import { SendResourceService } from '../../../../_services/send-resource.service';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss'],
})
export class AddressesListComponent implements OnDestroy, OnInit {
  addresses: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.PERSON_DATA) {
        this.addresses = response.resource?.addresses || [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
