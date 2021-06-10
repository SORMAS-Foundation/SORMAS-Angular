import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Task.contextReference'),
    dataKey: 'assigneeUser.caption',
    isSortable: true,
  },
  {
    name: _('statisticsVisualizationType'),
    dataKey: 'taskType',
    isSortable: true,
  },
  {
    name: _('Task.priority'),
    dataKey: 'priority',
    isSortable: true,
  },
  {
    name: _('Task.taskContext'),
    dataKey: 'taskContext',
    isSortable: true,
  },
  {
    name: _('region'),
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: _('district'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('Task.suggestedStart'),
    dataKey: 'suggestedStart',
    isSortable: true,
  },
];
