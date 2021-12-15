import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-disease-overview',
  templateUrl: './dashboard-disease-overview.component.html',
  styleUrls: ['./dashboard-disease-overview.component.scss'],
})
export class DashboardDiseaseOverviewComponent {
  @Input() data: any;
}
