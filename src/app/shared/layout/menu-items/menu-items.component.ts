import { ChangeDetectionStrategy, Component, Injectable, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import logoPath from '../../../../assets/img/sormas-logo.png';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MatDrawer],
})
@Injectable()
export class MenuItemsComponent {
  logo = logoPath;
  @Input() drawer: MatDrawer;
  // @Input() isToolbarMenu = true;

  navigation = [
    { link: '', label: $localize`Dashboard` },
    { link: 'about', label: $localize`About` },
    { link: 'tasks', label: $localize`Tasks` },
    { link: 'forms', label: $localize`Forms` },
    { link: 'user-profile', label: $localize`My profile` },
  ];

  constructor(drawer: MatDrawer) {
    this.drawer = drawer;
    // this.isToolbarMenu = isToolbarMenu;
  }
}
