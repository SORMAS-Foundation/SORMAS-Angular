import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.EventGroup.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    className: 'bold',
  },
  {
    name: 'captions.EventGroup.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.EventGroup.eventCount',
    dataKey: 'eventCount',
    isSortable: true,
  },
];
