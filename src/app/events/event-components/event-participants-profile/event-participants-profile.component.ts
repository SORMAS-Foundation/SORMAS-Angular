import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { SentResourceTypes } from '../../../_constants/common';
import { EventParticipantDto } from '../../../_models/eventParticipantDto';
import { EventParticipantService } from '../../../_services/api/event-participant.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { HelperService } from '../../../_services/helper.service';
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

  constructor(
    public participantService: EventParticipantService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.updateOptions('person', 'birthdateYYYY', this.helperService.getYears());
    this.updateOptions('person', 'birthdateMM', this.helperService.getMonths());
    this.updateOptions('person', 'birthdateDD', this.helperService.getDaysForMonth());
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

  onFormChanged(event: any): void {
    const yearOfPerson = 'person.birthdateYYYY';
    this.participant.person = {
      ...this.participant.person,
      birthdateYYYY: event[yearOfPerson],
    };
    this.sendResourceService.setResource(
      this.participant,
      SentResourceTypes.EVENT_PARTICIPANT_DATA
    );
  }

  updateOptions(id: string, field: string, options: any): void {
    const section = this.formData.find((item) => {
      return item.id === id;
    });
    const dayField = (section?.fields as any[]).find((item) => {
      return item.key.includes(field);
    });
    dayField.options = options;
  }
}
