import { ChangeDetectionStrategy, Component } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.png';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  logo = logoPath; // can be deleted if the new approach works

  navigation = [
    // this can be deleted as well if the new approach works
    { link: '', label: $localize`Dashboard` },
    { link: 'about', label: $localize`About` },
    { link: 'tasks', label: $localize`Tasks` },
    { link: 'forms', label: $localize`Forms` },
    { link: 'user-profile', label: $localize`My profile` },
  ];
}
