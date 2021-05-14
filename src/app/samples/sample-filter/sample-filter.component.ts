import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-filter',
  templateUrl: './sample-filter.component.html',
  styleUrls: ['./sample-filter.component.scss'],
})
export class SampleFilterComponent {
  @Input() drawer: any = {};
}
