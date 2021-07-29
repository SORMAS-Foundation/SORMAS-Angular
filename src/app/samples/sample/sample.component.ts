import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../_services/notification.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_PERSON } from './sample-form-data';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { CaseDataDto, ContactDto, EventParticipantDto, SampleDto } from '../../_models/models';
import { SampleService } from '../../_services/api/sample.service';
import { CaseService } from '../../_services/api/case.service';
import { ContactService } from '../../_services/api/contact.service';
import { InfoBarType } from '../../_models/common';
import { EventService } from '../../_services/api/event.service';
import { BaseService } from '../../_services/api/base.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  sample: SampleDto;
  sampleId: string;
  additionalData: CaseDataDto | ContactDto | EventParticipantDto;
  additionalDataType: InfoBarType;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_PERSON;

  constructor(
    public sampleService: SampleService,
    private caseService: CaseService,
    private contactService: ContactService,
    private eventService: EventService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.sampleId = routeParams.sampleId;
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
    });
  }

  initForm(): void {
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      this.sample,
      this.formData
    );
  }

  requestAdditionalInfo(): void {
    let service: BaseService<any> | undefined;
    let id = '';

    if (this.sample.associatedCase) {
      this.additionalDataType = 'SAMPLE_CASE';
      service = this.caseService;
      id = this.sample.associatedCase.uuid;
    } else if (this.sample.associatedContact) {
      this.additionalDataType = 'SAMPLE_CONTACT';
      service = this.contactService;
      id = this.sample.associatedContact.uuid;
    } else if (this.sample.associatedEventParticipant) {
      this.additionalDataType = 'SAMPLE_EVENT_PARTICIPANT';
      service = this.eventService;
      id = this.sample.associatedEventParticipant.uuid;
    }

    if (service && id) {
      service.getById(id).subscribe({
        next: (response: any) => {
          this.additionalData = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      });
    }
  }

  getAdditionalDataUrl(): string {
    let url = '';

    switch (this.additionalDataType) {
      case 'SAMPLE_CASE':
        url = `/cases/case/${this.additionalData.uuid}/details`;
        break;
      case 'SAMPLE_CONTACT':
        url = `/contacts/contact/${this.additionalData.uuid}`;
        break;
      case 'SAMPLE_EVENT_PARTICIPANT':
        url = `/events/event/${this.additionalData.uuid}/participants`;
        break;
      default:
    }
    return url;
  }
}
