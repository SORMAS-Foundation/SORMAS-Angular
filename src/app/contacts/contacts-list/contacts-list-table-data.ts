import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/contacts/contact/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.disease',
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
    dataKey: 'contactProximity',
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
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
  },
  {
    name: 'captions.Contact.numberOfVisits',
    dataKey: 'visitCount',
    isSortable: true,
  },
  {
    name: 'captions.columnNumberOfPendingTasks',
    dataKey: '', // toDo
    isSortable: true,
  },
];
