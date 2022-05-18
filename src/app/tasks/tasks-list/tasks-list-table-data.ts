import { COMMON_DATE_FORMAT, TABLE_MAX_COLUMN_WIDTH } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Task.contextReference',
    dataKey: 'contextReference.uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['contextReference.uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Task.taskType',
    dataKey: 'taskType',
    translationName: 'TaskTypeOptions',
    maxWidth: TABLE_MAX_COLUMN_WIDTH,
    isSortable: true,
  },
  {
    name: 'captions.Task.priority',
    dataKey: 'priority',
    translationName: 'TaskPriorityOptions',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="task-priority-$param1">$param1</span>',
      params: ['priority'],
    },
  },
  {
    name: 'captions.Task.taskContext',
    dataKey: 'taskContext',
    translationName: 'TaskContextOptions',
    isSortable: true,
  },
  {
    name: 'captions.regionName',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'captions.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.Task.suggestedStart',
    dataKey: 'suggestedStart',
    align: 'right',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Task.dueDate',
    dataKey: 'dueDate',
    isSortable: true,
    align: 'right',
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Task.assigneeUser',
    dataKey: 'assigneeUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.Task.assigneeReply',
    dataKey: 'assigneeReply',
    maxWidth: TABLE_MAX_COLUMN_WIDTH,
    isSortable: true,
  },
  {
    name: 'captions.Task.creatorComment',
    dataKey: 'creatorComment',
    maxWidth: TABLE_MAX_COLUMN_WIDTH,
    isSortable: true,
  },
  {
    name: 'captions.Task.taskStatus',
    dataKey: 'taskStatus',
    translationName: 'TaskStatusOptions',
    isSortable: true,
  },
];
