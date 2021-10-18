import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.subcontinent',
    dataKey: 'defaultName',
    isSortable: true,
  },
  {
    name: 'captions.continent',
    dataKey: 'continent.caption',
    isSortable: true,
  },
  {
    name: 'captions.Subcontinent.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
];
