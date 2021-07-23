import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: 'captions.columnDiseaseShort',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactClassification',
    dataKey: 'contactClassification',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactStatus',
    dataKey: 'contactStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactProximity',
    dataKey: 'contactProximity', // toDo
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpStatus',
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
  },
  {
    name: 'captions.Contact.numberOfVisits',
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: 'captions.columnNumberOfPendingTasks',
    dataKey: '', // toDo
    isSortable: true,
  },
];
