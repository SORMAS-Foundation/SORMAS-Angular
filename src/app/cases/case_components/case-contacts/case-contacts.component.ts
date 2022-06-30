import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  ACTIONS_CONTACT,
  ADD_MODAL_WIDE,
  API_ROUTE_CONTACTS,
  EXPORT_CUSTOM_MODAL_WIDTH,
  EXPORT_TYPE,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  ADD_MODAL_MAX_WIDTH,
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
import {
  CASE_CONTACT_LINE_LISTING_FORM_ID,
  CONTACT_FILTERS_FORM_ID,
} from '../../../_constants/form-identifiers';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';
import { ImportModalComponent } from '../../../shared/modals/import-modal/import-modal.component';
import { LineListingAddComponent } from '../../../shared/modals/line-listing-add-modal/line-listing-add.component';
import { FORM_DATA_LINE_LISTING_ADD } from '../../../contacts/contacts-list/contact-line-listing-add-form-data';

@Component({
  selector: 'app-case-contacts',
  templateUrl: './case-contacts.component.html',
  styleUrls: ['./case-contacts.component.scss'],
})
export class CaseContactsComponent implements OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CASE_CONTACT_FILTERS));
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  preSetFilters: Filter[];
  formIdFilters = CONTACT_FILTERS_FORM_ID;

  private subscriptions: Subscription[] = [];

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
    {
      role: NavItemRole.ACTION,
      name: 'captions.lineListing',
      action: ACTIONS_CONTACT.LINE_LISTING,
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
        exportFormData: JSON.parse(JSON.stringify(FORM_DATA_EXPORT_CONFIGURATION)),
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
      case ACTIONS_CONTACT.LINE_LISTING:
        this.addLineListing();
        break;
      default:
        break;
    }
  }

  addLineListing(): void {
    const dialogRef = this.dialog.open(LineListingAddComponent, {
      width: ADD_MODAL_MAX_WIDTH,
      maxWidth: `calc(${ADD_MODAL_MAX_WIDTH} - 16px)`,
      data: {
        formId: CASE_CONTACT_LINE_LISTING_FORM_ID,
        formData: FORM_DATA_LINE_LISTING_ADD,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  openImportModal(): void {
    this.dialog.open(ImportModalComponent, {
      width: ADD_MODAL_WIDE,
      data: {
        title: 'strings.headingImportCaseContacts',
        type: ACTIONS_CONTACT.IMPORT,
        service: this.contactService,
        selectDate: true,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
