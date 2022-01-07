import { Component, Input } from '@angular/core';
import { VIEW_OPTIONS } from '../../../_models/common';
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

  determineDiseaseProgress(obj: any): string {
    if (obj.casesDifference > 0) {
      return 'rising';
    }
    if (obj.casesDifference < 0) {
      return 'falling';
    }
    return 'stagnant';
  }
}
