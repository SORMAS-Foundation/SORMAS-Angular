import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.regionName',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.Region.epidCode',
    dataKey: 'epidCode',
    isSortable: true,
  },
  {
    name: 'captions.Region.externalID',
    dataKey: 'externalID',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Region.population',
    dataKey: 'population',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Region.growthRate',
    dataKey: 'growthRate',
    align: 'right',
    isSortable: true,
  },
];
