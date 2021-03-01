import { ChangeDetectionStrategy, Component } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.png';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  logo = logoPath;
  navigation = routesConfig;
  showMenuHeader = true;
  showButtonBurger = true;
  constructor(private mediaService: MediaService) {}
  ngAfterContentInit(): void {
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
