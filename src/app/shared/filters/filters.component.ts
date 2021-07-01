import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { FilterService } from '../../_services/filter.service';
import { BREAKPOINTS } from '../../app.constants';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() opened = true;
  @Input() fixed = true;
  @Input() topGap = 0;
  @Input() bottomGap = 0;
  @Input() mode: MatDrawerMode = 'side';

  @ViewChild('filters') filters: MatSidenav;

  isMobile: boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
      this.mode = state.matches ? 'side' : 'over';
      this.opened = state.matches;
      this.isMobile = !state.matches;
    });
  }

  openFilters(): void {
    this.opened = true;
    this.filters.open();
  }

  closeFilters(): void {
    this.opened = false;
    this.filters.close();
  }

  resetFilters(): void {
    this.filterService.setFilters([]);
  }
}
