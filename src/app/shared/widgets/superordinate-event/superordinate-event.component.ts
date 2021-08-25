import { Component } from '@angular/core';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-superordinate-event',
  templateUrl: './superordinate-event.component.html',
  styleUrls: ['./superordinate-event.component.scss'],
})
export class SuperordinateEventComponent {
  config: FormElementBase<any>;
}
