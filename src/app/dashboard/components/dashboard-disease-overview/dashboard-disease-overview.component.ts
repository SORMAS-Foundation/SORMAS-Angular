import { Component, Input } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../../_models/common';
import { defaultColumnDefs } from './dashboard-disease-overview-table-data';

@Component({
  selector: 'app-dashboard-disease-overview',
  templateUrl: './dashboard-disease-overview.component.html',
  styleUrls: ['./dashboard-disease-overview.component.scss'],
})
export class DashboardDiseaseOverviewComponent {
  @Input() data: any;

  columnDefs = defaultColumnDefs;
  viewOptions = VIEW_OPTIONS;
  viewMode: ViewOptions = VIEW_OPTIONS.PRIMARY;

  determineDiseaseProgress(obj: any): string {
    if (obj.casesDifference > 0) {
      return 'rising';
    }
    if (obj.casesDifference < 0) {
      return 'falling';
    }
    return 'stagnant';
  }

  onViewChange(event: ViewOptions): void {
    this.viewMode = event;
  }
}
