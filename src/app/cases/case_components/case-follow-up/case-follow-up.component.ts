import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
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

  public resourceService: BaseService<any>;

  constructor(
    public visitService: VisitService,
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
}
