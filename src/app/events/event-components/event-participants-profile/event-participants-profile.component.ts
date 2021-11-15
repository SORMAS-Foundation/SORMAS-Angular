import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EVENT_PARTICIPANTS_PROFILE_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { SentResourceTypes } from '../../../_constants/common';
import { EventParticipantDto } from '../../../_models/eventParticipantDto';
import { EventParticipantService } from '../../../_services/api/event-participant.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { FORM_DATA_EVENT_PARTICIPANT } from './event-participant-form-data';

@Component({
  selector: 'app-event-participants-profile',
  templateUrl: './event-participants-profile.component.html',
  styleUrls: ['./event-participants-profile.component.scss'],
})
export class EventParticipantsProfileComponent implements OnInit {
  participant: EventParticipantDto;
  participantId: string;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_EVENT_PARTICIPANT;
  formId = EVENT_PARTICIPANTS_PROFILE_FORM_ID;

  constructor(
    public participantService: EventParticipantService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.participantId = routeParams.participantId;
    this.participantService.getById(this.participantId).subscribe({
      next: (response: any) => {
        this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
          response,
          this.formData
        );
        this.participant = response;
        setTimeout(() => {
          this.sendResourceService.setResource(
            this.participant,
            SentResourceTypes.EVENT_PARTICIPANT_DATA
          );
        });
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }
}
