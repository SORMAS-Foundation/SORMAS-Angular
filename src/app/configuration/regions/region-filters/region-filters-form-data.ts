import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  EntityRelevanceStatusOptions,
} from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const relevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);

export const FORM_DATA_REGION_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameEpidLike',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevanceStatus',
    title: 'strings.entityCountries',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: relevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'more',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        placeholder: 'captions.country',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
];
