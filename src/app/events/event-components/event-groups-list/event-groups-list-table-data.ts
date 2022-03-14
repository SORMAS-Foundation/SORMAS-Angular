import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.EventGroup.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event-groups/$param1',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.EventGroup.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.EventGroup.eventCount',
    dataKey: 'eventCount',
    align: 'right',
    isSortable: true,
  },
];
