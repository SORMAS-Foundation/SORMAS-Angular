import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss'],
})
export class EventFiltersComponent {
  @Input() drawer: any = {};
}
