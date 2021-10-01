import { Component } from '@angular/core';
import { EntityLink } from '../_constants/common';
import { SideNavService } from '../_services/sidenav.service';

const LINKS: EntityLink[] = [
  { link: '/stats/statistics', title: 'captions.View.statistics' },
  { link: '/stats/exports', title: 'captions.View.statistics.database-export' },
];

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  links: EntityLink[] = LINKS;

  constructor(private sidenavService: SideNavService) {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
