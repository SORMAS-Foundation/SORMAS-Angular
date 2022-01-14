import { Component } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../_models/common';

@Component({
  selector: 'app-surveillance',
  templateUrl: './surveillance.component.html',
  styleUrls: ['./surveillance.component.scss'],
})
export class SurveillanceComponent {
  showDiseaseBurden = true;
  showNewData = true;
  showEpiCurve = true;
  showMap = true;

  onMapViewChange(event: ViewOptions): void {
    this.showDiseaseBurden = event === VIEW_OPTIONS.PRIMARY;
    this.showNewData = event === VIEW_OPTIONS.PRIMARY;
    this.showEpiCurve = event === VIEW_OPTIONS.PRIMARY;
  }
}
