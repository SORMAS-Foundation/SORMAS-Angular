import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Facility.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.Facility.type',
    dataKey: 'type',
    isSortable: true,
  },
  {
    name: 'captions.Facility.region',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.Facility.district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.Facility.community',
    dataKey: 'community.caption',
    isSortable: true,
  },
  {
    name: 'captions.Facility.city',
    dataKey: 'city',
    isSortable: true,
  },
  {
    name: 'captions.Facility.latitude',
    dataKey: 'latitude',
    isSortable: true,
  },
  {
    name: 'captions.Facility.longitude',
    dataKey: 'longitude',
    isSortable: true,
  },
  {
    name: 'captions.Facility.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
];
