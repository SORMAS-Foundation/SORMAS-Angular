import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, Map, tileLayer } from 'leaflet';
import 'leaflet.fullscreen';
import { TranslateService } from '@ngx-translate/core';
import { ViewOptions } from '../../../_models/common';
import { MapType } from '../../../_constants/common';

@Component({
  selector: 'app-dashboard-map',
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.scss'],
})
export class DashboardMapComponent implements OnInit {
  @Output() mapViewUpdate: EventEmitter<ViewOptions> = new EventEmitter();
  @Input() mapType: MapType;

  map: Map;
  initialLat = 51.1657;
  initialLong = 10.4515;
  initialZoom = 5;
  options: any;
  title = '';

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.options = {
      layers: [tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' })],
      zoom: this.initialZoom,
      center: latLng(this.initialLat, this.initialLong),
    };
    this.setMapTitle();
  }

  onMapReady(map: Map): void {
    this.map = map;
  }

  onLayerUpdate(event: any): void {
    // update map based on layer selection
    // eslint-disable-next-line no-console
    console.log(event);
  }

  onViewChange(event: ViewOptions): void {
    this.mapViewUpdate.emit(event);

    setTimeout(() => {
      this.map.invalidateSize();
    });
  }

  setMapTitle() {
    switch (this.mapType) {
      case MapType.Surveillance:
        this.title = this.translateService.instant('strings.headingCaseStatusMap');
        break;
      case MapType.Contacts:
        this.title = this.translateService.instant('strings.headingContactMap');
        break;
      default:
        this.title = '';
        break;
    }
  }
}
