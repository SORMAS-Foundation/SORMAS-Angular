import { Component } from '@angular/core';
import { EntityLink } from '../_constants/common';

const LINKS: EntityLink[] = [
  { link: '/configuration/outbreaks', title: 'Outbreaks' },
  { link: '/configuration/continents', title: 'Continents' },
  { link: '/configuration/subcontinents', title: 'Subcontinents' },
  { link: '/configuration/countries', title: 'Countries' },
  { link: '/configuration/regions', title: 'Regions' },
  { link: '/configuration/districts', title: 'Districts' },
  { link: '/configuration/communities', title: 'Communities' },
  { link: '/configuration/facilities', title: 'Facilities' },
  { link: '/configuration/entry-points', title: 'Points of entry' },
  { link: '/configuration/population', title: 'Population' },
  { link: '/configuration/line-listing', title: 'Line listing' },
  { link: '/configuration/document-templates', title: 'Document templates' },
];

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  links: EntityLink[] = LINKS;
}
