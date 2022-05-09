import { FORM_DATA_SEARCHBOX } from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

export const FORM_DATA_SPECIFIC_SEARCH = [
  {
    id: 'addressType',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'uuid',
        placeholder: 'strings.promptSearch',
      },
    ],
  },
];
