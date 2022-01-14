import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-dashboard-case-map',
  templateUrl: './dashboard-case-map.component.html',
  styleUrls: ['./dashboard-case-map.component.scss'],
})
export class DashboardCaseMapComponent implements OnInit {
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

  onLayerUpdate(event: any): void {
    // update map based on layer selection
    // eslint-disable-next-line no-console
    console.log(event);
  }
}
