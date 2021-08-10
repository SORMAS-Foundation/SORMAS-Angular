import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../_constants/common';
import { EventParticipantDto } from '../../../_models/eventParticipantDto';
import { SendResourceService } from '../../../_services/send-resource.service';

@Component({
  selector: 'app-last-update',
  templateUrl: './last-update.component.html',
  styleUrls: ['./last-update.component.scss'],
})
export class LastUpdateComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  participant: EventParticipantDto;
  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.EVENT_PARTICIPANT_DATA) {
        this.participant = response?.resource;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
