import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import logoPath from '../../../assets/img/sormas-logo.svg';
import { CustomBreakpointNames } from '../../services/media/breakpoints.service';
import { MediaService } from '../../services/media/media.service';
import { routesConfig } from './shared/routesConfig';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  logo = logoPath;
  navigation = routesConfig;
  showMenuHeader = true;
  showButtonBurger = true;

  constructor(private mediaService: MediaService, private matIconRegistry: MatIconRegistry) {}

  ngOnInit(): void {
    this.mediaService.subscribeToLayoutChanges().subscribe(() => {
      const IS_MEDIUM = this.mediaService.isBreakpointActive(CustomBreakpointNames.medium);
      this.showMenuHeader = !IS_MEDIUM;
      this.showButtonBurger = !!IS_MEDIUM;
      if (IS_MEDIUM) {
        this.sidenav.close();
      }
    });
  }
}
