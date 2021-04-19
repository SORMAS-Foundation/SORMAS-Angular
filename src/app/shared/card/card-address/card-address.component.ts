import { Component, Input } from '@angular/core';
import { LocationDto } from '../../../_models/locationDto';

@Component({
  selector: 'app-card-address',
  templateUrl: './card-address.component.html',
  styleUrls: ['./card-address.component.scss'],
})
export class CardAddressComponent {
  @Input() data: LocationDto;
}
