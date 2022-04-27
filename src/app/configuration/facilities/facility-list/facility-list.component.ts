import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NavItem, TableColumn } from '../../../_models/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { FacilityService } from '../../../_services/api/facility.service';
import { FacilityDto } from '../../../_models/facilityDto';
import { defaultColumnDefs } from './facilities-table-data';
import { actionsBulkEditDefs, actionsMoreDefs } from './facilities-actions-data';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ACTIONS_FACILITY,
  ADD_MODAL_MAX_WIDTH,
  API_ROUTE_FACILITIES,
  CONFIGURATION_FACILITY_FILTERS_FORM_ID,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../../app.constants';
import { FacilityAddEditComponent } from '../facility-add-edit/facility-add-edit.component';
import { TableComponent } from '../../../shared/table/table.component';
import { NotificationService } from '../../../_services/notification.service';
import { ExportService } from '../../../_services/api/export.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss'],
})
export class FacilityListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_FACILITY_FILTERS_FORM_ID;
  actionsMore: NavItem[] = actionsMoreDefs;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public facilityService: FacilityService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  openEditFacilityModal(facility: FacilityDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('actionEditFacility'),
        component: FacilityAddEditComponent,
        resource: facility,
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

  openAddFacilityModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewFacility'),
        component: FacilityAddEditComponent,
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

  onActionSelected(event: any) {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    switch (event) {
      case ACTIONS_FACILITY.BASIC_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_FACILITIES.EXPORT);
        break;
      case ACTIONS_FACILITY.DETAILED_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_FACILITIES.EXPORT);
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
