import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Person.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'Person.ageAndBirthDate',
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
    name: 'sex',
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: 'Person.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'address',
    dataKey: 'city',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: ['city', 'street', 'houseNumber', 'postalCode'],
    },
  },
  {
    name: 'person.primaryPhone',
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: 'Person.emailAddress',
    dataKey: 'email',
    isSortable: true,
  },
];
