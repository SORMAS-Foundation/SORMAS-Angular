import { Component, EventEmitter, Output } from '@angular/core';
import { FORM_DATA_MAP_LAYERS } from './map-layers-form-data';

@Component({
  selector: 'app-map-layers',
  templateUrl: './map-layers.component.html',
  styleUrls: ['./map-layers.component.scss'],
})
export class MapLayersComponent {
  @Output() selection: EventEmitter<any> = new EventEmitter();

  formId = 'mapLayers';
  formElements = FORM_DATA_MAP_LAYERS;

  onFormUpdate(event: any): void {
    this.selection.emit(event);
  }
}
