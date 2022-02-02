import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIG_ENTRIES,
  ENTRY_FILTERS_FORM_ID,
  HEADER_HEIGHT,
} from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { TableColumn } from '../../_models/common';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { TravelEntryService } from '../../_services/api/travel-entry-service';
import { FORM_DATA_ENTRY_FILTERS } from '../entries-filters/entry-filters-form-data';
import { EntryAddComponent } from '../entry-add/entry-add.component';
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

  constructor(
    public entryService: TravelEntryService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  openAddTravelEntryModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewTravelEntry'),
        component: EntryAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
