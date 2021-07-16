import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Person.uuid',
    dataKey: 'uuid',
    isSortable: true,
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
    dataKey: 'age',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: [
        'ageAndBirthDate.age',
        'ageAndBirthDate.birthdateDD',
        'ageAndBirthDate.birthdateMM',
        'ageAndBirthDate.birthdateYYYY',
      ],
    },
  },
  {
    name: 'captions.sex',
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: 'captions.Person.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.address',
    dataKey: 'city',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: ['city', 'street', 'houseNumber', 'postalCode'],
    },
  },
  {
    name: 'captions.Person.phone',
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: 'captions.Person.emailAddress',
    dataKey: 'email',
    isSortable: true,
  },
];
