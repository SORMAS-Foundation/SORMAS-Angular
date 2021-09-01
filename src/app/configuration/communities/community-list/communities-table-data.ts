import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.communityName',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.regionName',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.districtName',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.Community.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
];
