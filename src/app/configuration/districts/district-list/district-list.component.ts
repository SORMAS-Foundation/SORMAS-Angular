import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NavItem, TableColumn } from '../../../_models/common';
import { DistrictService } from '../../../_services/api/district.service';
import { actionsBulkEditDefs } from './districts-actions-data';
import { defaultColumnDefs } from './districts-table-data';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  API_ROUTE_DISTRICTS,
  CONFIGURATION_DISTRICT_FILTERS_FORM_ID,
  CONFIGURATION_MODAL_WIDTH,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  TableAppearanceOptions,
} from '../../../app.constants';
import { DistrictAddEditComponent } from '../district-add-edit/district-add-edit.component';
import { DistrictDto } from '../../../_models/districtDto';
import { TableComponent } from '../../../shared/table/table.component';
import { NotificationService } from '../../../_services/notification.service';
import { ExportService } from '../../../_services/api/export.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss'],
})
export class DistrictListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_DISTRICT_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public districtService: DistrictService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  openEditDistrictModal(district: DistrictDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('headingEditDistrict'),
        component: DistrictAddEditComponent,
        resource: district,
        archive: true,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddDistrictModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewDistrict'),
        component: DistrictAddEditComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_DISTRICTS.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
