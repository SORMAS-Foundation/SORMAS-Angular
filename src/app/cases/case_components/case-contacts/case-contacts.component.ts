import { Component } from '@angular/core';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { Filter, TableColumn } from '../../../_models/common';
import { defaultColumnDefs } from './contacts-list-table-data';
import { CONFIG_CASES } from '../../../_constants/storage';
import { ContactService } from '../../../_services/api/contact.service';
import { FORM_DATA_CASE_CONTACT_FILTERS } from '../../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CONTACT_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';

@Component({
  selector: 'app-case-contacts',
  templateUrl: './case-contacts.component.html',
  styleUrls: ['./case-contacts.component.scss'],
})
export class CaseContactsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CASE_CONTACT_FILTERS));
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  preSetFilters: Filter[];
  formIdFilters = CONTACT_FILTERS_FORM_ID;

  public resourceService: BaseService<any>;

  constructor(public contactService: ContactService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: caseItem.uuid,
      },
    ];

    this.defaultColumns = defaultColumnDefs;
    this.resourceService = resourceService;
  }
}
