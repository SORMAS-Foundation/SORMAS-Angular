import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { latLng, Map, tileLayer } from 'leaflet';
import { ViewOptions } from '../../../_models/common';

@Component({
  selector: 'app-dashboard-contact-map',
  templateUrl: './dashboard-contact-map.component.html',
  styleUrls: ['./dashboard-contact-map.component.scss'],
})
export class DashboardContactMapComponent implements OnInit {
  @Output() mapViewUpdate: EventEmitter<ViewOptions> = new EventEmitter();

  map: Map;
  initialLat = 51.1657;
  initialLong = 10.4515;
  initialZoom = 5;
  options: any;

  ngOnInit(): void {
    this.options = {
      layers: [tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' })],
      zoom: this.initialZoom,
      center: latLng(this.initialLat, this.initialLong),
    };
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
}
