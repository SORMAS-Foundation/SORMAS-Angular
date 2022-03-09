import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.TravelEntry.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/entries/entry/$param1/travel-entry',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.TravelEntry.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.personFirstName',
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.personLastName',
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.homeDistrictName',
    dataKey: 'responsibleDistrict.caption',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.pointOfEntryName',
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.recovered',
    dataKey: 'recovered',
    isSortable: true,
    iconify: 'IconsMap',
    align: 'center',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: ' ',
      params: [],
    },
  },
  {
    name: 'captions.TravelEntry.vaccinated',
    dataKey: 'vaccinated',
    isSortable: true,
    iconify: 'IconsMap',
    align: 'center',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: ' ',
      params: [],
    },
  },
  {
    name: 'captions.TravelEntry.testedNegative',
    dataKey: 'testedNegative',
    isSortable: true,
    iconify: 'IconsMap',
    align: 'center',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: ' ',
      params: [],
    },
  },
  {
    name: 'captions.TravelEntry.quarantineTo',
    dataKey: 'quarantineEnd',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
];
