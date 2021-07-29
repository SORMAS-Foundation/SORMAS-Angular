import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Task.contextReference',
    dataKey: 'assigneeUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.statisticsVisualizationType',
    dataKey: 'taskType',
    isSortable: true,
  },
  {
    name: 'captions.Task.priority',
    dataKey: 'priority',
    isSortable: true,
  },
  {
    name: 'captions.Task.taskContext',
    dataKey: 'taskContext',
    isSortable: true,
  },
  {
    name: 'captions.region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'captions.district',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.Task.suggestedStart',
    dataKey: 'suggestedStart',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy h:mm aa',
    },
  },
];
