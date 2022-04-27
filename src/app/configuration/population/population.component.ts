import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  API_ROUTE_POPULATION,
  EXPORT_TYPES,
  POPULATION_IMPORT_MODAL_WIDTH,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../app.constants';
import { PopulationImportComponent } from './population-import/population-import.component';
import { NotificationService } from '../../_services/notification.service';
import { ExportService } from '../../_services/api/export.service';

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

  openImportModal(): void {
    this.dialog.open(PopulationImportComponent, {
      width: POPULATION_IMPORT_MODAL_WIDTH,
    });
  }

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_POPULATION.EXPORT);
  }
}
