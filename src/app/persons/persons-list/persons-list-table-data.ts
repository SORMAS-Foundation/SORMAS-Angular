import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Person.uuid'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('firstName'),
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: _('lastName'),
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: _('Person.ageAndBirthDate'),
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
    name: _('sex'),
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: _('Person.districtName'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('address'),
    dataKey: 'city',
    advancedDisplay: '$param1, $param2, $param3, $param4',
    advancedDisplayParams: ['city', 'street', 'houseNumber', 'postalCode'],
    isSortable: true,
  },
  {
    name: _('person.primaryPhone'),
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: _('Person.emailAddress'),
    dataKey: 'email',
    isSortable: true,
  },
];
