import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../app.constants';
import { SendResourceService } from '../../../_services/send-resource.service';

@Component({
  selector: 'app-person-contacts-list',
  templateUrl: './person-contacts-list.component.html',
  styleUrls: ['./person-contacts-list.component.scss'],
})
export class PersonContactsListComponent implements OnDestroy, OnInit {
  contacts: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.PERSON_DATA) {
        this.contacts = response.resource?.personContactDetails;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
