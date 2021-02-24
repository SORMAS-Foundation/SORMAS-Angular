import { Component, OnInit } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.png';
import { CustomBreakpointNames } from '../../services/media/breakpoints.service';
import { MediaService } from '../../services/media/media.service';
import { routesConfig } from './shared/routesConfig';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  logo = logoPath;
  navigation = routesConfig;
  showMenuHeader = true;
  showButtonBurger = true;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.subscribeToLayoutChanges().subscribe(() => {
      const IS_MEDIUM = this.mediaService.isBreakpointActive(CustomBreakpointNames.medium);
      this.showMenuHeader = !IS_MEDIUM;
      this.showButtonBurger = !!IS_MEDIUM;
    });
  }
}
