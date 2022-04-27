import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { CountryDto } from '../../../_models/models';
import { CountryService } from '../../../_services/api/country.service';
import { actionsBulkEditDefs } from './countries-actions-data';
import { defaultColumnDefs } from './countries-table-data';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  CONFIGURATION_MODAL_WIDTH,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../../_constants/common';
import { CountryAddEditComponent } from '../country-add-edit/country-add-edit.component';
import { TableComponent } from '../../../shared/table/table.component';
import { CONFIGURATION_COUNTRY_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';
import { API_ROUTE_COUNTRIES } from '../../../_constants/api';
import { NotificationService } from '../../../_services/notification.service';
import { ExportService } from '../../../_services/api/export.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_COUNTRY_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public countryService: CountryService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  openEditCountryModal(country: CountryDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('headingEditCountry'),
        component: CountryAddEditComponent,
        resource: country,
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

  openAddCountryModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewCountry'),
        component: CountryAddEditComponent,
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

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_COUNTRIES.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
