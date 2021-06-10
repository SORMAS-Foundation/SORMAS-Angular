import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Person.uuid',
    dataKey: 'uuid',
    isSortable: true,
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
    advancedDisplay: '$param1 ($param2/$param3/$param4)',
    advancedDisplayParams: [
      'ageAndBirthDate.age',
      'ageAndBirthDate.birthdateDD',
      'ageAndBirthDate.birthdateMM',
      'ageAndBirthDate.birthdateYYYY',
    ],
    isSortable: true,
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
    advancedDisplay: '$param1, $param2, $param3, $param4',
    advancedDisplayParams: ['city', 'street', 'houseNumber', 'postalCode'],
    isSortable: true,
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
