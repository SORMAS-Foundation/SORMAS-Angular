import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: 'disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'Contact.contactClassification',
    dataKey: 'contactClassification',
    isSortable: true,
  },
  {
    name: 'Contact.contactStatus',
    dataKey: 'contactStatus',
    isSortable: true,
  },
  {
    name: 'Contact.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'Contact.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'Contact.contactProximityLongForm',
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: 'ContactsEpiCurveMode.FOLLOW_UP_STATUS',
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: 'ContactsEpiCurveMode.FOLLOW_UP_UNTIL',
    dataKey: 'followUpUntil',
    isSortable: true,
  },
  {
    name: 'Contact.numberOfVisits',
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: 'columnNumberOfPendingTasks',
    dataKey: '', // toDo
    isSortable: true,
  },
];
