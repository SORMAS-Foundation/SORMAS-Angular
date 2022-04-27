import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../_models/common';
import { CONFIG_PERSONS } from '../../_constants/storage';
import { defaultColumnDefs } from './persons-list-table-data';
import { PersonService } from '../../_services/api/person.service';
import { PersonDto } from '../../_models/models';
import { ADD_MODAL_NARROW, HEADER_HEIGHT, PERSON_FILTERS_FORM_ID } from '../../app.constants';
import { FORM_DATA_PERSON_FILTERS } from '../person-filters/person-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { SetMissingGeolocationComponent } from '../set-missing-geolocation/set-missing-geolocation.component';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_PERSON_FILTERS));
  formId = PERSON_FILTERS_FORM_ID;
  persons: PersonDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_PERSONS;
  headerHeight = HEADER_HEIGHT;

  constructor(public personService: PersonService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  setGeolocation(): void {
    this.dialog.open(SetMissingGeolocationComponent, {
      width: ADD_MODAL_NARROW,
    });
  }
}
