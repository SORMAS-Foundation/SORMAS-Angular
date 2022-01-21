import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CONFIG_ENTRIES, ENTRY_FILTERS_FORM_ID, HEADER_HEIGHT } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TableColumn } from '../../_models/common';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { TravelEntryService } from '../../_services/api/travel-entry-service';
import { FORM_DATA_ENTRY_FILTERS } from '../entries-filters/entry-filters-form-data';
import { defaultColumnDefs } from './entries-list-table-data';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss'],
})
export class EntriesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_ENTRY_FILTERS));
  samples: TravelEntryDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_ENTRIES;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = ENTRY_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  constructor(public entryService: TravelEntryService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
