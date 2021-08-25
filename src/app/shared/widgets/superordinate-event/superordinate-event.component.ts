import { Component, OnInit } from '@angular/core';
import {FormElementBase} from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-superordinate-event',
  templateUrl: './superordinate-event.component.html',
  styleUrls: ['./superordinate-event.component.scss']
})
export class SuperordinateEventComponent implements OnInit {

  config: FormElementBase<any>;

  constructor() { }

  ngOnInit(): void {
    console.log('this.groupthis.groupthis.groupthis.group', this.config);
  }

}
