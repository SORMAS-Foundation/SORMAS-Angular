import { Component, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './immunization-person-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto, PersonDto } from '../../../_models/models';
import { PersonService } from '../../../_services/api/person.service';
import { NotificationService } from '../../../_services/notification.service';
import { HelperService } from '../../../_services/helper.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { SentResourceTypes } from '../../../app.constants';
import { CONTACT_PERSON_FORM_ID } from '../../../_constants/form-identifiers';

@Component({
  selector: 'app-immunization-person',
  templateUrl: './immunization-person.component.html',
  styleUrls: ['./immunization-person.component.scss']
})
export class ImmunizationPersonComponent implements OnInit {
  person: PersonDto;
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_IMMUNIZATION_PERSON_DETAILS;
  formId = CONTACT_PERSON_FORM_ID;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    private personService: PersonService,
    private notificationService: NotificationService,
    private helperService: HelperService,
    private sendResourceService: SendResourceService
  ) {}

  ngOnInit(): void {
    this.updateOptions('person', 'year', this.helperService.getYears());
    this.updateOptions('person', 'month', this.helperService.getMonths());
    this.updateOptions('person', 'day', this.helperService.getDaysForMonth());
  }

  setPersonFormData(): void {
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      this.person,
      this.formData
    );
  }

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.personService.getById('WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI').subscribe({
      next: (response: any) => {
        this.person = response || ({} as PersonDto);
        this.resourceService = resourceService;
        this.setPersonFormData();
        setTimeout(() => {
          this.sendResourceService.setResource(this.person, SentResourceTypes.PERSON_DATA);
        });
      },
      error: (err: any) => {
        this.notificationService.error(err);
        this.person = {} as PersonDto;
        this.setPersonFormData();
      },
      complete: () => {},
    });
  }

  onFormChanged(event: any): void {
    const options = this.helperService.getDaysForMonth(event.month, event.year);
    this.updateOptions('person', 'day', options);
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
