import { Component, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-person-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto, PersonDto } from '../../../_models/models';
import { PersonService } from '../../../_services/api/person.service';
import { NotificationService } from '../../../_services/notification.service';
import { HelperService } from '../../../_services/helper.service';

@Component({
  selector: 'app-case-person',
  templateUrl: './case-person.component.html',
  styleUrls: ['./case-person.component.scss'],
})
export class CasePersonComponent implements OnInit {
  person: PersonDto;
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_PERSON_DETAILS;

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    private personService: PersonService,
    private notificationService: NotificationService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.updateOptions('Person', 'year', this.helperService.getYears());
    this.updateOptions('Person', 'month', this.helperService.getMonths());
    this.updateOptions('Person', 'day', this.helperService.getDaysForMonth());
  }

  setPersonFormData(): void {
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      this.person,
      this.formData
    );
  }

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.personService.getById(caseItem.person.uuid).subscribe({
      next: (response: any) => {
        this.person = response || ({} as PersonDto);
        this.resourceService = resourceService;
        this.setPersonFormData();
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
    this.updateOptions('Person', 'day', options);
  }

  updateOptions(title: string, field: string, options: any): void {
    const section = this.formData.find((item) => {
      return item.title === title;
    });
    const dayField = (section?.fields as any[]).find((item) => {
      return item.key.includes(field);
    });
    dayField.options = options;
  }
}
