import { TableColumn } from '../../../_models/common';

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
    name: 'Contact.typeOfContact',
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: 'headingFollowUpStatus',
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: 'Contact.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
  },
  {
    name: 'Informatns N',
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: 'Tasks',
    dataKey: '', // toDo
    isSortable: true,
  },
];
