import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  API_ROUTE_CONTACTS_FOLLOW_UP,
  EXPORT_TYPES,
  MODAL_LARGE_WIDTH,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  TableAppearanceOptions,
} from '../../../app.constants';
import { FollowUpVisitAddComponent } from '../../../shared/follow-up-visit-add/follow-up-visit-add.component';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { Filter, TableColumn } from '../../../_models/common';
import { CaseDataDto, VisitDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { ExportService } from '../../../_services/api/export.service';
import { VisitService } from '../../../_services/api/visit.service';
import { NotificationService } from '../../../_services/notification.service';
import { defaultColumnDefs } from './contact-follow-up-table-data';

@Component({
  selector: 'app-contact-follow-up',
  templateUrl: './contact-follow-up.component.html',
  styleUrls: ['./contact-follow-up.component.scss'],
})
export class ContactFollowUpComponent implements OnDestroy {
  visits: VisitDto[] = [];
  defaultColumns: TableColumn[] = defaultColumnDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  preSetFilters: Filter[];

  public resourceService: BaseService<any>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    public visitService: VisitService,
    private notificationService: NotificationService,
    private translateService: TranslateService,
    private exportService: ExportService,
    private dialog: MatDialog
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: 'WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI',
      },
    ];
    this.resourceService = resourceService;
  }

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CONTACTS_FOLLOW_UP.EXPORT);
  }

  openAddVisitModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: MODAL_LARGE_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewVisit'),
        component: FollowUpVisitAddComponent,
      },
    });

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
