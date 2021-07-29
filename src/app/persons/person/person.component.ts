import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDto } from '../../_models/models';
import { NotificationService } from '../../_services/notification.service';
import { PersonService } from '../../_services/api/person.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_PERSON } from './person-form-data';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { SendResourceService } from '../../_services/send-resource.service';
import { SentResourceTypes } from '../../app.constants';
import { EventService } from '../../_services/api/event.service';
import { CaseService } from '../../_services/api/case.service';
import { ContactService } from '../../_services/api/contact.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  person: PersonDto;
  personId: string;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_PERSON;
  constructor(
    public personService: PersonService,
    public eventService: EventService,
    public caseService: CaseService,
    public contactService: ContactService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.personId = routeParams.personId;
    this.personService.getById(this.personId).subscribe({
      next: (response: any) => {
        this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
          response,
          this.formData
        );
        this.person = response;
        setTimeout(() => {
          this.sendResourceService.setResource(this.person, SentResourceTypes.PERSON_DATA);
        });
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }
}
