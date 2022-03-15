import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Person.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'captions.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'captions.Person.ageAndBirthDate',
    dataKey: 'ageAndBirthDate.age',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: [
        'ageAndBirthDate.age',
        'ageAndBirthDate.dateOfBirthMM',
        'ageAndBirthDate.dateOfBirthDD',
        'ageAndBirthDate.dateOfBirthYYYY',
      ],
    },
  },
  {
    name: 'captions.sex',
    dataKey: 'sex',
    translationName: 'Sex',
    isSortable: true,
  },
  {
    name: 'captions.Person.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.Location.street',
    dataKey: 'street',
    isSortable: true,
  },
  {
    name: 'captions.Location.houseNumber',
    dataKey: 'houseNumber',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Location.postalCode',
    dataKey: 'postalCode',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.city',
    dataKey: 'city',
    isSortable: true,
  },
  {
    name: 'captions.Person.phone',
    dataKey: 'phone',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Person.emailAddress',
    dataKey: 'email',
    isSortable: true,
  },
];
