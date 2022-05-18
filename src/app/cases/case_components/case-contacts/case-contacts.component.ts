import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ACTIONS_CONTACT,
  API_ROUTE_CONTACTS,
  EXPORT_CUSTOM_MODAL_WIDTH,
  EXPORT_TYPE,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../../app.constants';
import { CustomExportComponent } from '../../../shared/modals/custom-export/custom-export.component';
import { NotificationService } from '../../../_services/notification.service';
import { ExportService } from '../../../_services/api/export.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { Filter, NavItem, NavItemRole, TableColumn } from '../../../_models/common';
import { defaultColumnDefs } from './contacts-list-table-data';
import { CONFIG_CASES } from '../../../_constants/storage';
import { ContactService } from '../../../_services/api/contact.service';
import { FORM_DATA_CASE_CONTACT_FILTERS } from '../../../shared/contact-filters/contact-filters-form-data';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CONTACT_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';
import { FORM_DATA_EXPORT_CONFIGURATION } from '../../../contacts/contacts-list/export-configuration-form-data';

@Component({
  selector: 'app-case-contacts',
  templateUrl: './case-contacts.component.html',
  styleUrls: ['./case-contacts.component.scss'],
})
export class CaseContactsComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CASE_CONTACT_FILTERS));
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  preSetFilters: Filter[];
  formIdFilters = CONTACT_FILTERS_FORM_ID;
  actionsMore: NavItem[] = [
    {
      role: NavItemRole.ACTION,
      name: 'captions.exportBasic',
      action: ACTIONS_CONTACT.BASIC_EXPORT,
    },
    {
      role: NavItemRole.ACTION,
      name: 'captions.exportDetailed',
      action: ACTIONS_CONTACT.DETAILED_EXPORT,
    },
    {
      role: NavItemRole.ACTION,
      name: 'captions.exportCustom',
      action: ACTIONS_CONTACT.CUSTOM_EXPORT,
    },
  ];

  public resourceService: BaseService<any>;

  constructor(
    public contactService: ContactService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: caseItem.uuid,
      },
    ];

    this.defaultColumns = defaultColumnDefs;
    this.resourceService = resourceService;
  }

  exportCustomCase(): void {
    this.dialog.open(CustomExportComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: {
        exportType: EXPORT_TYPE.CONTACT,
        exportFormData: FORM_DATA_EXPORT_CONFIGURATION,
      },
    });
  }

  exportBasicCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CONTACTS.EXPORT);
  }

  exportDetailedCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_CONTACTS.EXPORT);
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_CONTACT.BASIC_EXPORT:
        this.exportBasicCase();
        break;
      case ACTIONS_CONTACT.DETAILED_EXPORT:
        this.exportDetailedCase();
        break;
      case ACTIONS_CONTACT.CUSTOM_EXPORT:
        this.exportCustomCase();
        break;
      default:
        break;
    }
  }
}
