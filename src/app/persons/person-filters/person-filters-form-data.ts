import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Presentcondition,
} from '../../app.constants';
import { PersonAssociationType } from '../../_constants/enums';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const associationTypeOptions = pipe.transform(PersonAssociationType);
const presentConditionOptions = pipe.transform(Presentcondition);

export const FORM_DATA_PERSON_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameAddressPhoneEmailLike',
        placeholder: 'strings.promptPersonsSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'persons',
    title: 'headingPersons',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'personAssociation',
        options: associationTypeOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'condition',
    title: 'captions.Person.presentCondition',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'presentCondition',
        options: presentConditionOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'headingBirthdate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateYYYY',
        placeholder: 'captions.Person.birthdateYYYY',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateMM',
        placeholder: 'captions.Person.birthdateMM',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateDD',
        placeholder: 'captions.Person.birthdateDD',
        options: [],
        className: 'fullwidth',
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
        key: 'region',
        placeholder: 'captions.Contact.region',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        placeholder: 'captions.Contact.district',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        placeholder: 'captions.Contact.community',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
];
