import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Contact.uuid'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Contact.contactClassification'),
    dataKey: 'contactClassification',
    isSortable: true,
  },
  {
    name: _('Contact.contactStatus'),
    dataKey: 'contactStatus',
    isSortable: true,
  },
  {
    name: _('Contact.firstName'),
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: _('Contact.lastName'),
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: _('Contact.typeOfContact'),
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: _('headingFollowUpStatus'),
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: _('Contact.followUpUntil'),
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
