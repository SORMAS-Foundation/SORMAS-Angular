import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Assigned user'),
    dataKey: 'assigneeUser.caption',
    isSortable: true,
  },
  {
    name: _('Type'),
    dataKey: 'taskType',
    isSortable: true,
  },
  {
    name: _('Priority'),
    dataKey: 'priority',
    isSortable: true,
  },
  {
    name: _('Context'),
    dataKey: 'taskContext',
    isSortable: true,
  },
  {
    name: _('Region'),
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: _('District'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('Suggested start'),
    dataKey: 'suggestedStart',
    isSortable: true,
  },
];
