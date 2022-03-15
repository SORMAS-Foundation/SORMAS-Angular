import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.pointOfEntryType',
    dataKey: 'pointOfEntryType',
    isSortable: true,
  },
  {
    name: 'captions.Region',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.District',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.latitude',
    dataKey: 'latitude',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.longitude',
    dataKey: 'longitude',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.externalID',
    dataKey: 'externalID',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.PointOfEntry.active',
    dataKey: 'active',
    translationName: 'BooleanOption',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="active-entry-$param1">$param1</span>',
      params: ['active'],
    },
  },
];
