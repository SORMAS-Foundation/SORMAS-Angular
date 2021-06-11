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
    isSortable: true,
    format: {
      type: 'DISPLAY',
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
    isSortable: true,
    format: {
      type: 'DISPLAY',
      pattern: '$param1, $param2, $param3, $param4',
      params: ['city', 'street', 'houseNumber', 'postalCode'],
    },
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
