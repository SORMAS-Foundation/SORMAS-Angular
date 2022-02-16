import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.AggregateReport.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.AggregateReport.newCases',
    dataKey: 'newCases',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.AggregateReport.labConfirmations',
    dataKey: 'labConfirmations',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.AggregateReport.deaths',
    dataKey: 'deaths',
    isSortable: true,
    align: 'right',
  },
];
