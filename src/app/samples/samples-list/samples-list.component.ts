import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIG_SAMPLES,
  HEADER_HEIGHT,
  SAMPLE_FILTERS_FORM_ID,
} from '../../app.constants';
import { TableColumn } from '../../_models/common';
import { SampleDto } from '../../_models/sampleDto';
import { SampleService } from '../../_services/api/sample.service';
import { defaultColumnDefs } from './samples-list-table-data';
import { SampleAddComponent } from '../sample-add/sample-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { FORM_DATA_SAMPLE_FILTERS } from '../sample-filters/sample-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.scss'],
})
export class SamplesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_SAMPLE_FILTERS));
  samples: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_SAMPLES;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = SAMPLE_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  constructor(
    public sampleService: SampleService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddSampleModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('captions.sampleCreateNew'),
        component: SampleAddComponent,
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

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
