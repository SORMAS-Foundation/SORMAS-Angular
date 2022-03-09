import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.districtName',
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
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.District.growthRate',
    dataKey: 'growthRate',
    align: 'right',
    isSortable: true,
  },
];
