import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

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
    name: _('Contact.contactProximityLongForm'),
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: _('ContactsEpiCurveMode.FOLLOW_UP_STATUS'),
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: _('ContactsEpiCurveMode.FOLLOW_UP_UNTIL'),
    dataKey: 'followUpUntil',
    isSortable: true,
  },
  {
    name: _('Contact.numberOfVisits'),
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: _('columnNumberOfPendingTasks'),
    dataKey: '', // toDo
    isSortable: true,
  },
];
