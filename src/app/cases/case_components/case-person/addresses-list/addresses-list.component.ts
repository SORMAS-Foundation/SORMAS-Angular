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

  getHomeAddress(address: any): any {
    return [
      {
        addressType: address?.facilityType,
        addressTypeDetails: address?.facilityDetails,
        houseNumber: address?.houseNumber,
        street: address?.street,
        postalCode: address?.postalCode,
        uuid: address?.uuid,
      },
    ];
  }

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.PERSON_DATA) {
        this.addresses =
          this.getHomeAddress(response.resource?.address).concat(response.resource?.addresses) ||
          [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
