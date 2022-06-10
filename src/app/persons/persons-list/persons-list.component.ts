import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_PERSONS } from '../../_constants/storage';
import { defaultColumnDefs } from './persons-list-table-data';
import { PersonService } from '../../_services/api/person.service';
import { PersonDto } from '../../_models/models';
import {
  ACTIONS_PERSONS,
  ADD_MODAL_NARROW,
  API_ROUTE_PERSONS,
  EXPORT_CUSTOM_MODAL_WIDTH,
  EXPORT_TYPE,
  EXPORT_TYPES,
  HEADER_HEIGHT,
  PERSON_FILTERS_FORM_ID,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../app.constants';
import { FORM_DATA_PERSON_FILTERS } from '../person-filters/person-filters-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { SetMissingGeolocationComponent } from '../set-missing-geolocation/set-missing-geolocation.component';
import { actionsExportDefs } from './persons-list-actions-data';
import { ExportService } from '../../_services/api/export.service';
import { NotificationService } from '../../_services/notification.service';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';
import { CustomExportComponent } from '../../shared/modals/custom-export/custom-export.component';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_PERSON_FILTERS));
  formId = PERSON_FILTERS_FORM_ID;
  persons: PersonDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_PERSONS;
  headerHeight = HEADER_HEIGHT;
  actionsExport = actionsExportDefs;

  constructor(
    public personService: PersonService,
    private dialog: MatDialog,
    private exportService: ExportService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  setGeolocation(): void {
    this.dialog.open(SetMissingGeolocationComponent, {
      width: ADD_MODAL_NARROW,
    });
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_PERSONS.BASIC_EXPORT:
        this.exportBasicTask();
        break;
      case ACTIONS_PERSONS.DETAILED_EXPORT:
        this.exportDetailedTask();
        break;
      case ACTIONS_PERSONS.CUSTOM_EXPORT:
        this.customExport();
        break;
      default:
        break;
    }
  }

  customExport(): void {
    this.dialog.open(CustomExportComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: {
        exportType: EXPORT_TYPE.PERSON,
        exportFormData: JSON.parse(JSON.stringify(FORM_DATA_EXPORT_CONFIGURATION)),
      },
    });
  }

  exportBasicTask(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_PERSONS.EXPORT);
  }

  exportDetailedTask(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_PERSONS.EXPORT);
  }
}
