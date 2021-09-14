import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../_services/notification.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_PERSON } from './sample-form-data';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { SampleDto } from '../../_models/models';
import { SampleService } from '../../_services/api/sample.service';
import { CaseService } from '../../_services/api/case.service';
import { ContactService } from '../../_services/api/contact.service';
import { InfoBarType, InfoBarTypeOptions } from '../../_models/common';
import { EventParticipantService } from '../../_services/api/event-participant.service';
import { PersonService } from '../../_services/api/person.service';
import { EventService } from '../../_services/api/event.service';
import { PathogenTestService } from '../../_services/api/pathogenTest.service';
import { AdditionalTestService } from '../../_services/api/additionalTest.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, OnDestroy {
  sample: SampleDto;
  sampleId: string;
  additionalData: any;
  additionalDataType: InfoBarType;
  additionalDataLink: string;
  infoBarOptions = InfoBarTypeOptions;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_PERSON;
  subscriptions: Subscription[] = [];

  constructor(
    public sampleService: SampleService,
    public pathogenTestService: PathogenTestService,
    public additionalTestService: AdditionalTestService,
    private caseService: CaseService,
    private contactService: ContactService,
    private eventparticipantService: EventParticipantService,
    private eventService: EventService,
    private personService: PersonService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.sampleId = routeParams.sampleId;
    this.subscriptions.push(
      this.sampleService.getById(this.sampleId).subscribe({
        next: (response: any) => {
          this.sample = response;
          this.initForm();
          this.requestAdditionalInfo();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  initForm(): void {
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      this.sample,
      this.formData
    );
  }

  requestAdditionalInfo(): void {
    if (this.sample.associatedCase) {
      this.additionalDataType = this.infoBarOptions.SAMPLE_CASE;
      this.requestCaseData(this.sample.associatedCase.uuid);
    } else if (this.sample.associatedContact) {
      this.additionalDataType = this.infoBarOptions.SAMPLE_CONTACT;
      this.requestContactData(this.sample.associatedContact.uuid);
    } else if (this.sample.associatedEventParticipant) {
      this.additionalDataType = this.infoBarOptions.SAMPLE_EVENT_PARTICIPANT;
      this.requestEventParticipantData(this.sample.associatedEventParticipant.uuid);
    }
  }

  requestCaseData(id: string): void {
    this.subscriptions.push(
      this.caseService.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData = response;
          this.additionalDataLink = this.getAdditionalDataUrl();
          this.requestPersonData(response.person.uuid);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  requestPersonData(id: string): void {
    this.subscriptions.push(
      this.personService.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData.person = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  requestEventParticipantData(id: string): void {
    this.subscriptions.push(
      this.eventparticipantService.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData = response;
          this.additionalDataLink = this.getAdditionalDataUrl();
          this.requestEventData(response.event.uuid);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  requestEventData(id: string): void {
    this.subscriptions.push(
      this.eventService.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData.event = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  requestContactData(id: string): void {
    this.subscriptions.push(
      this.contactService.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData = response;
          this.additionalDataLink = this.getAdditionalDataUrl();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  getAdditionalDataUrl(): string {
    let url = '';

    switch (this.additionalDataType) {
      case this.infoBarOptions.SAMPLE_CASE:
        url = `/cases/case/${this.additionalData.uuid}/details`;
        break;
      case this.infoBarOptions.SAMPLE_CONTACT:
        url = `/contacts/contact/${this.additionalData.uuid}`;
        break;
      case this.infoBarOptions.SAMPLE_EVENT_PARTICIPANT:
        url = `/events/event/${this.additionalData.event.uuid}/details`;
        break;
      default:
    }
    return url;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
