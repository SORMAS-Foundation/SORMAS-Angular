import { Component } from '@angular/core';
import { DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE } from '../../_constants/common';
import { VIEW_OPTIONS, ViewOptions } from '../../_models/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  dashboardEpidemiologicalCurveType = DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE;
  fullscreenEpi = false;

  onEpiCurveViewChange(event: ViewOptions): void {
    this.fullscreenEpi = event === VIEW_OPTIONS.SECONDARY;
  }
}
