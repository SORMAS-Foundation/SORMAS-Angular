import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.TravelEntry.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/travelentries/entry/$param1',
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
  },
  {
    name: 'captions.TravelEntry.vaccinated',
    dataKey: 'vaccinated',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.testedNegative',
    dataKey: 'testedNegative',
    isSortable: true,
  },
  {
    name: 'captions.TravelEntry.quarantineTo',
    dataKey: 'quarantineEnd',
    isSortable: true,
  },
];
