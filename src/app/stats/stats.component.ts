import { Component } from '@angular/core';
import { EntityLink } from '../_constants/common';

const LINKS: EntityLink[] = [
  { link: '/stats/statistics', title: 'Statistics' },
  { link: '/stats/exports', title: 'Exports' },
];

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  links: EntityLink[] = LINKS;
}
