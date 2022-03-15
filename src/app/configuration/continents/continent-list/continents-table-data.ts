import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Continent.displayName',
    dataKey: 'displayName',
    isSortable: true,
  },
  {
    name: 'captions.Continent.externalId',
    dataKey: 'externalId',
    align: 'right',
    isSortable: true,
  },
];
