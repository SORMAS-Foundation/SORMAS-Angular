import { FORM_DATA_RADIO, FORM_DATA_SEARCHBOX } from '../../../app.constants';
import { ContinentRelevanceStatusOptions } from '../../../_constants/enums';
import { FormGroupStyleType } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const relevanceStatusOptions = pipe.transform(ContinentRelevanceStatusOptions);

export const FORM_DATA_CONTINENT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameLike',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevanceStatus',
    title: 'captions.View.configuration.continents.short',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: relevanceStatusOptions,
        separated: true,
        value: 'ACTIVE',
      },
    ],
  },
];
