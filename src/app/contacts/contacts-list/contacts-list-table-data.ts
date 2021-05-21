import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Contact id'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('Disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Contact classification'),
    dataKey: 'contactClassification',
    isSortable: true,
  },
  {
    name: _('Contact status'),
    dataKey: 'contactStatus',
    isSortable: true,
  },
  {
    name: _('First name'),
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: _('Last name'),
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: _('Type of contact'),
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: _('Follow-up status'),
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: _('Follow-up unti'),
    dataKey: 'followUpUntil',
    isSortable: true,
  },
  {
    name: _('Informatns N'),
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: _('Tasks'),
    dataKey: '', // toDo
    isSortable: true,
  },
];
