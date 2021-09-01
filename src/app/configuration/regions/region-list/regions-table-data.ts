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
    isSortable: true,
  },
  {
    name: 'captions.Region.population',
    dataKey: 'population',
    isSortable: true,
  },
  {
    name: 'captions.Region.growthRate',
    dataKey: 'growthRate',
    isSortable: true,
  },
];
