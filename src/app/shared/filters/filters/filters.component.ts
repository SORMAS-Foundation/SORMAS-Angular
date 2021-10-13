import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../_services/filter.service';
import { BREAKPOINTS } from '../../../app.constants';
import { onMainContentChange, onSideNavChange } from './filters-animations';
import { SideNavService } from '../../../_services/sidenav.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [onMainContentChange, onSideNavChange],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input() opened = true;
  @Input() fixed = true;
  @Input() topGap = 0;
  @Input() bottomGap = 0;
  @Input() mode: MatDrawerMode = 'side';
  @Input() expandable = false;

  @Output() status: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('filters') filters: MatSidenav;

  isMobile: boolean;
  isAlwaysOpened = false;
  drawerMode: MatDrawerMode;
  subscriptions: Subscription[] = [];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private filterService: FilterService,
    private sidenavService: SideNavService
  ) {}

  ngOnInit(): void {
    this.drawerMode = this.mode;
    this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
      this.drawerMode = state.matches ? 'side' : 'over';
      this.opened = this.expandable ? false : state.matches;
      this.isMobile = !state.matches;
      this.isAlwaysOpened = this.expandable && !this.isMobile;
    });
    this.subscriptions.push(
      this.sidenavService.sideNavToggleSubject.subscribe(() => {
        this.toggleFilters();
      })
    );
  }

  toggleFilters(): void {
    this.opened = !this.opened;
    this.status.emit(this.opened);

    if (this.expandable) {
      this.drawerMode = this.opened ? 'over' : 'side';
      return;
    }

    if (this.opened) {
      this.filters.open();
      return;
    }

    this.filters.close();
  }

  resetFilters(): void {
    this.filterService.setFilters([]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
