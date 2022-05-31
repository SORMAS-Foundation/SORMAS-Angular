import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { latLng, Map, tileLayer } from 'leaflet';
import '@bepo65/leaflet.fullscreen';
import { NotificationService } from '../../../_services/notification.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

declare let require: any;

@Component({
  selector: 'app-gps-coords',
  templateUrl: './gps-coords.component.html',
  styleUrls: ['./gps-coords.component.scss'],
})
export class GpsCoordsComponent implements OnInit {
  group: FormGroup;
  config: FormElementBase<string>;

  map: Map;
  initialLat = 51.1657;
  initialLong = 10.4515;
  initialZoom = 5;
  options: any;
  title = '';
  selectedMarker: any;
  L: any;
  isMapOpened: boolean = false;

  constructor(
    public translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' }),
      ],
      zoom: this.initialZoom,
      center: latLng(this.initialLat, this.initialLong),
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topright',
        title: this.translateService.instant('viewFullscreen'),
        titleCancel: this.translateService.instant('exitFullscreen'),
        forceSeparateButton: true,
        content:
          '<mat-icon id="full-screen-map-btn" class="material-icons-round">fullscreen</mat-icon>',
      },
    };
    this.setMapTitle();
  }
  onMapReady(map: Map): void {
    map.zoomControl.setPosition('bottomright');
    this.map = map;

    this.map.on('enterFullscreen', () => {
      // @ts-ignore
      document.getElementById('full-screen-map-btn').innerHTML = 'fullscreen_exit_black';
      // @ts-ignore
      document.getElementById('full-screen-map-btn').classList.add('fullscreen');
    });

    this.map.on('exitFullscreen', () => {
      // @ts-ignore
      document.getElementById('full-screen-map-btn').innerHTML = 'fullscreen';
      // @ts-ignore
      document.getElementById('full-screen-map-btn').classList.remove('fullscreen');
    });
  }

  setMapTitle() {
    this.title = this.translateService.instant('strings.headingCaseStatusMap');
  }

  setSelectedMarker(lat: number, lng: number, latLonAccuracy: number, isMarker: boolean) {
    if (this.selectedMarker) {
      this.map.removeLayer(this.selectedMarker);
    }

    const L = require('leaflet');

    const icon = {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 0],
        // specify the path here
        iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      }),
    };

    if (isMarker) {
      this.selectedMarker = L.marker(latLng(lat, lng), icon).addTo(this.map);
    } else {
      this.selectedMarker = L.circle([lat, lng], { radius: latLonAccuracy }).addTo(this.map);
    }
  }

  showLocation(): void {
    const latitude = this.group.controls[this.config.widgetInfo.latitude.replaceAll('.', '__')]
      .value;
    const longitude = this.group.controls[this.config.widgetInfo.longitude.replaceAll('.', '__')]
      .value;
    const latLonAccuracy = this.group.controls[
      this.config.widgetInfo.latLonAccuracy.replaceAll('.', '__')
    ].value;

    let isMarker = false;
    if (typeof latLonAccuracy === 'undefined' || latLonAccuracy === '' || latLonAccuracy === 0) {
      isMarker = true;
    }

    if (
      parseInt(latitude, 10) >= -90 &&
      parseInt(latitude, 10) <= 90 &&
      parseInt(longitude, 10) >= -180 &&
      parseInt(longitude, 10) <= 180
    ) {
      this.isMapOpened = true;
      this.setSelectedMarker(latitude, longitude, latLonAccuracy, isMarker);

      this.map.flyTo(latLng(latitude, longitude), 5, {
        animate: true,
        duration: 1,
      });
    } else {
      this.notificationService.error(this.translateService.instant('invalidCoords'));
    }
  }
}
