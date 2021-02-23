import { ChangeDetectionStrategy, Component } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.png';
import { routesConfig } from './shared/routesConfig';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  logo = logoPath;
  navigation = routesConfig;
}
