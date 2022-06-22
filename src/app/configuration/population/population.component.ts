import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ACTIONS_POPULATION,
  ADD_MODAL_WIDE,
  API_ROUTE_POPULATION,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { ExportService } from '../../_services/api/export.service';
import { ImportModalComponent } from '../../shared/modals/import-modal/import-modal.component';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss'],
})
export class PopulationComponent {
  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private translateService: TranslateService,
    private exportService: ExportService
  ) {}

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_POPULATION.EXPORT);
  }

  openImportModal(): void {
    this.dialog.open(ImportModalComponent, {
      width: ADD_MODAL_WIDE,
      data: {
        title: 'strings.headingImportPopulationData',
        type: ACTIONS_POPULATION.IMPORT,
        selectDate: true,
      },
    });
  }
}
