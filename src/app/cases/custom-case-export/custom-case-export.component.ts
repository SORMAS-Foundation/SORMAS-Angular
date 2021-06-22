import { Component } from '@angular/core';
import { CardAppearanceOptions } from '../../_constants/enums';

@Component({
  selector: 'app-custom-case-export',
  templateUrl: './custom-case-export.component.html',
  styleUrls: ['./custom-case-export.component.scss'],
})
export class CustomCaseExportComponent {
  appearance = CardAppearanceOptions;
  dataMyExports = [
    {
      title: 'Surveillance officer export for case data',
      link: '/soefcd.pdf',
    },
    {
      title: 'Anselm Adam export for person data',
      link: '/aaefpd.pdf',
    },
    {
      title: 'Export for general person',
      link: '/efgp.pdf',
    },
    {
      title: 'Export for general purpose',
      link: '/efgp.pdf',
    },
    {
      title: 'New export name',
      link: '/nen.pdf',
    },
  ];

  dataSharedExports = [
    {
      title: 'Surveillance officer export for case data',
      link: '/soefcd.pdf',
    },
    {
      title: 'Anselm Adam export for person data',
      link: '/aaefpd.pdf',
    },
    {
      title: 'Export for general person',
      link: '/efgp.pdf',
    },
    {
      title: 'Export for general purpose',
      link: '/efgp.pdf',
    },
    {
      title: 'New export name',
      link: '/nen.pdf',
    },
    {
      title: 'Shared export case management',
      link: '/secm.pdf',
    },
  ];
}
