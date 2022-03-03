import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Event.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
    className: 'bold',
  },
  {
    name: 'captions.Event.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.regionName',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'captions.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.address',
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: 'captions.EventActionExport.eventDate',
    dataKey: 'startDate',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
  },
];
