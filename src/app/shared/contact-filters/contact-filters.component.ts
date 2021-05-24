import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-filters',
  templateUrl: './contact-filters.component.html',
  styleUrls: ['./contact-filters.component.scss'],
})
export class ContactFiltersComponent {
  @Input() drawer: any = {};
}
