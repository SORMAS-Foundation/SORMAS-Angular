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
  subscriptions: Subscription[] = [];
  participant: EventParticipantDto;
  yearOfPerson?: string;
  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.EVENT_PARTICIPANT_DATA) {
          this.participant = response?.resource;
          this.yearOfPerson = (
            new Date().getFullYear() - (this.participant?.person?.birthdateYYYY ?? 0)
          ).toString();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
