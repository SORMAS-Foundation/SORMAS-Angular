import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Event.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
    essential: true,
    className: 'bold',
  },
  {
    name: 'eventGroup.linkEvent.status',
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: 'captions.date',
    dataKey: 'startDate',
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
    isSortable: true,
  },
  {
    name: 'eventGroup.linkEvent.reportDate',
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
    dataKey: 'reportDateTime',
    isSortable: true,
  },
  {
    name: 'captions.Location',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: [
        'eventLocation.city',
        'eventLocation.street',
        'eventLocation.region',
        'eventLocation.district',
      ],
    },
    dataKey: 'eventLocation',
    isSortable: true,
  },
];
