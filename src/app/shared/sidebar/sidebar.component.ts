import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BREAKPOINTS } from '../../app.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() hideSidebar: boolean = false;

  mode: MatDrawerMode = 'side';
  position: 'start' | 'end' = 'end';
  opened = true;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: ${BREAKPOINTS.lg}px)`]).subscribe((state) => {
      this.mode = state.matches ? 'over' : 'side';
      this.opened = !state.matches;
    });
  }

  toggleSidebar(): void {
    this.opened = !this.opened;
  }
}
