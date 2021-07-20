import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Visit.visitDateTime',
    dataKey: 'visitDateTime',
    isSortable: true,
    className: 'visit-date',
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'dd MMM hh:mm aa',
      breakSpaces: true,
    },
  },
  {
    name: 'captions.Visit.visitStatus',
    dataKey: 'visitStatus',
    isSortable: true,
    className: 'visit-status',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="visit-status-$param1">$param1</span>',
      params: ['visitStatus'],
    },
  },
  {
    name: 'captions.Visit.visitRemarks',
    dataKey: 'visitRemarks',
    isSortable: true,
    className: 'visit-remarks',
  },
  {
    name: 'captions.Symptoms.symptomatic',
    dataKey: 'symptomatic',
    isSortable: true,
    align: 'center',
    className: 'visit-symptomatic',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="symptoms-$param1">$param1</span>',
      params: ['symptomatic'],
    },
  },
  {
    name: 'captions.Symptoms.temperature',
    dataKey: 'temperature',
    isSortable: true,
    className: 'visit-temperature',
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1 °C',
      params: ['temperature'],
      match: {
        normal: [0, 37.3],
        fever: [37.3, 45],
      },
      breakSpaces: true,
    },
  },
  {
    name: 'captions.Visit.origin',
    dataKey: 'visitUser.caption',
    className: 'visit-person',
  },
];
