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

  navigation = [
    { link: '', label: $localize`Dashboard` },
    { link: 'about', label: $localize`About` },
    { link: 'tasks', label: $localize`Tasks` },
    { link: 'forms', label: $localize`Forms` },
    { link: 'cases', label: $localize`Cases` },
    { link: 'user-profile', label: $localize`My profile` },
  ];
}
