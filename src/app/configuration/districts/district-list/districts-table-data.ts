import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.District.epidCode',
    dataKey: 'epidCode',
    isSortable: true,
  },
  {
    name: 'captions.District.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.District.population',
    dataKey: 'population',
    isSortable: true,
  },
  {
    name: 'captions.District.growthRate',
    dataKey: 'growthRate',
    isSortable: true,
  },
];
