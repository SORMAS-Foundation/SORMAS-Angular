import { FORM_DATA_INPUT } from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

export const FORM_DATA_SPECIFIC_SEARCH = [
  {
    id: 'addressType',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'thirdParty',
        label: 'captions.personContactDetailThirdParty',
      },
    ],
  },
];
