import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, Map, tileLayer } from 'leaflet';
import '@bepo65/leaflet.fullscreen';
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
