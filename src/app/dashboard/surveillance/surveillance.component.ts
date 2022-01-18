import { Component } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../_models/common';

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
