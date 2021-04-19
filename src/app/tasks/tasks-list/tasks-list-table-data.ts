import { TableColumn } from '../../shared/table/table-column';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Assigned user',
    dataKey: 'assigneeUser.lastName',
    isSortable: true,
  },
  {
    name: 'Type',
    dataKey: 'taskType',
    isSortable: true,
  },
  {
    name: 'Priority',
    dataKey: 'priority',
    isSortable: true,
  },
  {
    name: 'Context',
    dataKey: 'taskContext',
    isSortable: true,
  },
  {
    name: 'Region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'District',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'Suggested start',
    dataKey: 'suggestedStart',
    isSortable: true,
  },
];
