import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  ADD_MODAL_MAX_WIDTH,
  ADD_MODAL_WIDE,
  API_ROUTE_CASES_FOLLOW_UP,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  TableAppearanceOptions,
} from '../../../app.constants';
import { Filter, TableColumn } from '../../../_models/common';
import { CaseDataDto, VisitDto } from '../../../_models/models';
import { BaseService } from '../../../_services/api/base.service';
import { VisitService } from '../../../_services/api/visit.service';
import { defaultColumnDefs } from './case-follow-up-table-data';
import { ExportService } from '../../../_services/api/export.service';
import { NotificationService } from '../../../_services/notification.service';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { CaseFollowUpAddVisitComponent } from '../case-follow-up-add-visit/case-follow-up-add-visit.component';

@Component({
  selector: 'app-case-follow-up',
  templateUrl: './case-follow-up.component.html',
  styleUrls: ['./case-follow-up.component.scss'],
})
export class CaseFollowUpComponent {
  visits: VisitDto[] = [];
  defaultColumns: TableColumn[] = defaultColumnDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  preSetFilters: Filter[];

  private subscription: Subscription[] = [];
  public resourceService: BaseService<any>;

  constructor(
    public visitService: VisitService,
    private dialog: MatDialog,
    private exportService: ExportService,
    private translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.preSetFilters = [
      {
        field: 'caze',
        value: caseItem.uuid,
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

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CASES_FOLLOW_UP.EXPORT);
  }

  openAddVisitModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_WIDE,
      data: {
        title: this.translateService.instant('strings.headingCreateNewVisit'),
        component: CaseFollowUpAddVisitComponent,
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
}
