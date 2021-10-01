import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  UserRole,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const userStatusOptions = [
  {
    key: true,
    value: 'Active',
  },
  {
    key: false,
    value: 'Inactive',
  },
];
const userRoleOptions = pipe.transform(UserRole);

export const FORM_DATA_USER_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptUserSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'status',
    title: 'captions.User.active',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'active',
        options: userStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'adminAspect',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'userRole',
        placeholder: 'captions.User.userRoles',
        options: userRoleOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        placeholder: 'strings.promptRegion',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        placeholder: 'strings.promptDistrict',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
];
