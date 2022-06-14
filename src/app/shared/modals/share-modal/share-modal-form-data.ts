import { FORM_DATA_CHECKBOX, FORM_DATA_SELECT, FORM_DATA_TEXTAREA } from '../../../app.constants';

export const FORM_DATA_CASE_SHARE = [
  {
    id: 'organization',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'organization',
        label: 'captions.SormasToSormasOptions.organization',
        options: [
          {
            key: 'organization1',
            value: 'Organization 1',
          },
          {
            key: 'organization2',
            value: 'Organization 2',
          },
        ],
        className: 'size-large',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'ownership',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'handOverOwnership',
        label: 'captions.SormasToSormasOptions.handOverOwnership',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pseudonymizePersonalData',
        label: 'captions.SormasToSormasOptions.pseudonymizePersonalData',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pseudonymizeSensitiveData',
        label: 'captions.SormasToSormasOptions.pseudonymizeSensitiveData',
        newLine: true,
      },
    ],
  },
  {
    id: 'share',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'withAssociatedContacts',
        label: 'captions.SormasToSormasOptions.withAssociatedContacts',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'withSamples',
        label: 'captions.SormasToSormasOptions.withSamples',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'withImmunizations',
        label: 'captions.SormasToSormasOptions.withImmunizations',
        newLine: true,
      },
    ],
  },
  {
    id: 'comment',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'comment',
        label: 'captions.SormasToSormasOptions.comment',
        className: 'size-large',
      },
    ],
  },
];
