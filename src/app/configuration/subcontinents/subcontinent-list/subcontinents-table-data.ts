import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Subcontinent.displayName',
    dataKey: 'defaultName',
    isSortable: true,
  },
  {
    name: 'captions.Subcontinent.continent',
    dataKey: 'continent.caption',
    isSortable: true,
  },
  {
    name: 'captions.Subcontinent.externalId',
    dataKey: 'externalId',
    align: 'right',
    isSortable: true,
  },
];
