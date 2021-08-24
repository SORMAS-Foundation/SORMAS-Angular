import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Country.isoCode',
    dataKey: 'isoCode',
    isSortable: true,
    className: 'configuration-country-code',
  },
  {
    name: 'captions.Country.displayName',
    dataKey: 'displayName',
    isSortable: true,
  },
  {
    name: 'captions.Country.subcontinent',
    dataKey: 'subcontinent.caption',
    isSortable: true,
  },
  {
    name: 'captions.Country.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'captions.Country.unoCode',
    dataKey: 'unoCode',
    isSortable: true,
    className: 'configuration-country-code',
  },
];
