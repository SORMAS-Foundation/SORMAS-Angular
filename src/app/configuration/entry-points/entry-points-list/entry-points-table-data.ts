import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.pointOfEntry',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.pointOfEntryType',
    dataKey: 'pointOfEntryType',
    isSortable: true,
  },
  {
    name: 'strings.entityRegion',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'strings.entityDistrict',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.latitude',
    dataKey: 'latitude',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.longitude',
    dataKey: 'longitude',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.active',
    dataKey: 'active',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="active-entry-$param1">$param1</span>',
      params: ['active'],
    },
  },
];
