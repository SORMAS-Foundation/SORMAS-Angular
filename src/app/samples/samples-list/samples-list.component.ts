import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ACTIONS_SAMPLE,
  ADD_MODAL_MAX_WIDTH,
  API_ROUTE_SAMPLES,
  CONFIG_SAMPLES,
  EXPORT_TYPES,
  HEADER_HEIGHT,
  SAMPLE_FILTERS_FORM_ID,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../app.constants';
import { NavItem, TableColumn } from '../../_models/common';
import { SampleDto } from '../../_models/sampleDto';
import { SampleService } from '../../_services/api/sample.service';
import { defaultColumnDefs } from './samples-list-table-data';
import { SampleAddComponent } from '../sample-add/sample-add.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { FORM_DATA_SAMPLE_FILTERS } from '../sample-filters/sample-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import {
  actionsViewOptionsDefs,
  actionsBulkEditDefs,
  actionsMoreDefs,
} from './samples-list-actions-data';
import { ExportService } from '../../_services/api/export.service';
import { NotificationService } from '../../_services/notification.service';

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
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsBulkEditOptions: NavItem[] = actionsBulkEditDefs;
  actionsMore: NavItem[] = actionsMoreDefs;

  private subscription: Subscription[] = [];

  constructor(
    public sampleService: SampleService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
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

  onActionSelected(event: any): void {
    let title = this.translateService.instant('captions.exportBasic');
    if (event === ACTIONS_SAMPLE.DETAILED_EXPORT) {
      title = this.translateService.instant('captions.exportDetailed');
    }

    this.notificationService.prompt({
      title,
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    switch (event) {
      case ACTIONS_SAMPLE.BASIC_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_SAMPLES.EXPORT);
        break;
      case ACTIONS_SAMPLE.DETAILED_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_SAMPLES.EXPORT);
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
