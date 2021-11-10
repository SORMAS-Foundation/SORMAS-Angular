import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_PERSONS } from '../../_constants/storage';
import { defaultColumnDefs } from './persons-list-table-data';
import { PersonService } from '../../_services/api/person.service';
import { PersonDto } from '../../_models/models';
import { HEADER_HEIGHT } from '../../app.constants';
import { FORM_DATA_PERSON_FILTERS } from '../person-filters/person-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_PERSON_FILTERS));
  persons: PersonDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_PERSONS;
  headerHeight = HEADER_HEIGHT;

  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
