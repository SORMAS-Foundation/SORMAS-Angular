import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TableColumn } from '../../_models/common';
import { CONFIG_IMMUNIZATIONS } from '../../_constants/storage';
import { HEADER_HEIGHT } from '../../_constants/common';
import { IMMUNIZATION_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { HelperService } from '../../_services/helper.service';
import { ImmunizationDto } from '../../_models/immunizationDto';
import { ImmunizationService } from '../../_services/api/immunization.service';
import { FORM_DATA_IMMUNIZATION_FILTERS } from '../immunization-filters/immunization-filters-form-data';
import { defaultColumnDefs } from './immunization-list-table-data';

@Component({
  selector: 'app-immunization-list',
  templateUrl: './immunization-list.component.html',
  styleUrls: ['./immunization-list.component.scss'],
})
export class ImmunizationListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_IMMUNIZATION_FILTERS));
  immunizations: ImmunizationDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_IMMUNIZATIONS;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = IMMUNIZATION_FILTERS_FORM_ID;

  constructor(
    public immunizationService: ImmunizationService,
    public helperService: HelperService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddImmunizationModal(): void {
    // eslint-disable-next-line no-console
    console.log('add');
  }
}
