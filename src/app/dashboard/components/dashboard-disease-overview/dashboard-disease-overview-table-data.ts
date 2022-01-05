import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'captions.DiseaseBurden.caseCount',
    dataKey: 'caseCount',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        'positive-value': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.previousCaseCount',
    dataKey: 'previousCaseCount',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.casesDifference',
    dataKey: 'casesDifferencePercentage',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '<span class="material-icons-round">keyboard_arrow_up</span>$param1%',
      params: ['casesDifferencePercentage'],
      match: {
        'positive-value': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.eventCount',
    dataKey: 'eventCount',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        'positive-value': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.outbreakDistrictCount',
    dataKey: 'outbreakDistrictCount',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        'positive-value': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.caseDeathCount',
    dataKey: 'caseDeathCount',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        'positive-fatalities': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
  {
    name: 'captions.DiseaseBurden.caseFatalityRate',
    dataKey: 'caseFatalityRate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1%',
      params: ['caseFatalityRate'],
      match: {
        'positive-fatalities': [0, Infinity],
        'no-value': [0, 0],
      },
    },
  },
];
