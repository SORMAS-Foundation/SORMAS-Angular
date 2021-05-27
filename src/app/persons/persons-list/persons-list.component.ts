import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_PERSONS } from '../../_constants/storage';
import { defaultColumnDefs } from './persons-list-table-data';
import { PersonService } from '../../_services/api/person.service';
import { PersonDto } from '../../_models/models';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  tasks: PersonDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_PERSONS;

  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
