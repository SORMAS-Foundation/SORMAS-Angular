import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-filters',
  templateUrl: './person-filters.component.html',
  styleUrls: ['./person-filters.component.scss'],
})
export class PersonFiltersComponent {
  @Input() drawer: any = {};
}
