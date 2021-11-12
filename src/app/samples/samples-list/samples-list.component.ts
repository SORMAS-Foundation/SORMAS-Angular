import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ADD_MODAL_MAX_WIDTH, HEADER_HEIGHT, ADD_EDIT_FORM_ID } from '../../app.constants';
import { TableColumn } from '../../_models/common';
import { CONFIG_SAMPLES } from '../../_constants/storage';
import { SampleDto } from '../../_models/sampleDto';
import { SampleService } from '../../_services/api/sample.service';
import { defaultColumnDefs } from './samples-list-table-data';
import { SampleAddComponent } from '../sample-add/sample-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { FormActionsService } from '../../_services/form-actions.service';
import { FORM_DATA_SAMPLE_FILTERS } from '../sample-filters/sample-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.scss'],
})
export class SamplesListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_SAMPLE_FILTERS));
  samples: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_SAMPLES;
  headerHeight = HEADER_HEIGHT;

  private subscription: Subscription[] = [];

  constructor(
    public sampleService: SampleService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
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
        this.formActionsService.setDiscard(ADD_EDIT_FORM_ID);
        if (result) {
          // callback
        }
      })
    );
  }
}
