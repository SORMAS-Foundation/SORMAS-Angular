import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Person id'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('First name'),
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: _('Last name'),
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: _('Age & birth date'),
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
    name: _('Sex'),
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: _('District'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('Address'),
    dataKey: 'city',
    advancedDisplay: '$param1, $param2, $param3',
    advancedDisplayParams: ['street', 'houseNumber', 'postalCode'],
    isSortable: true,
  },
  {
    name: _('Primary phone number'),
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: _('Primary email address'),
    dataKey: 'email',
    isSortable: true,
  },
];
