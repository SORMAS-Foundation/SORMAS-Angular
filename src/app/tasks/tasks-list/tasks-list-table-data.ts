import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Task.contextReference',
    dataKey: 'assigneeUser.caption',
    isSortable: true,
  },
  {
    name: 'statisticsVisualizationType',
    dataKey: 'taskType',
    isSortable: true,
  },
  {
    name: 'Task.priority',
    dataKey: 'priority',
    isSortable: true,
  },
  {
    name: 'Task.taskContext',
    dataKey: 'taskContext',
    isSortable: true,
  },
  {
    name: 'region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'district',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'Task.suggestedStart',
    dataKey: 'suggestedStart',
    isSortable: true,
  },
];
