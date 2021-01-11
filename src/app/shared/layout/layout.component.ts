import { Component, ChangeDetectionStrategy } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.png';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  year = new Date().getFullYear();
  logo = logoPath;

  // todo translations
  navigation = [
    { link: '', label: 'Dashboard' },
    { link: 'about', label: 'About' },
    { link: 'tasks', label: 'Tasks' },
    { link: 'user-profile', label: 'My profile' },
  ];

  navigationSideMenu = [...this.navigation];
}
