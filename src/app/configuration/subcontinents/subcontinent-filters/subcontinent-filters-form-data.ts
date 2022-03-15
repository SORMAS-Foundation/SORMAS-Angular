import { FORM_DATA_RADIO, FORM_DATA_SEARCHBOX, FORM_DATA_SELECT } from '../../../app.constants';
import { SubcontinentRelevanceStatusOptions } from '../../../_constants/enums';
import { FormGroupStyleType } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const relevanceStatusOptions = pipe.transform(SubcontinentRelevanceStatusOptions);

export const FORM_DATA_SUBCONTINENT_FILTERS = [
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
    title: 'captions.View.configuration.subcontinents.short',
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
        key: 'continent.uuid',
        placeholder: 'captions.Subcontinent.continent',
        options: [],
        service: 'continentService',
        className: 'fullwidth',
      },
    ],
  },
];
