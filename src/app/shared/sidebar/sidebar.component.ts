import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  mode: MatDrawerMode = 'side';
  position: 'start' | 'end' = 'end';
  opened = true;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe((state) => {
      this.mode = state.matches ? 'over' : 'side';
      this.opened = !state.matches;
    });
  }

  toggleSidebar(): void {
    this.opened = !this.opened;
  }
}
