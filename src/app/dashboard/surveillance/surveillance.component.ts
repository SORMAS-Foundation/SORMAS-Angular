import { Component } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../_models/common';
import { DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE, MapType } from '../../_constants/common';

@Component({
  selector: 'app-surveillance',
  templateUrl: './surveillance.component.html',
  styleUrls: ['./surveillance.component.scss'],
})
export class SurveillanceComponent {
  hideDiseaseBurden = false;
  hideNewData = false;
  hideEpiCurve = false;
  hideMap = false;
  dashboardEpidemiologicalCurveType = DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE;
  MapType = MapType;

  onMapViewChange(event: ViewOptions): void {
    this.hideDiseaseBurden = event === VIEW_OPTIONS.SECONDARY;
    this.hideNewData = event === VIEW_OPTIONS.SECONDARY;
    this.hideEpiCurve = event === VIEW_OPTIONS.SECONDARY;
  }

  onEpiCurveViewChange(event: ViewOptions): void {
    this.hideDiseaseBurden = event === VIEW_OPTIONS.SECONDARY;
    this.hideNewData = event === VIEW_OPTIONS.SECONDARY;
    this.hideMap = event === VIEW_OPTIONS.SECONDARY;
  }
}
