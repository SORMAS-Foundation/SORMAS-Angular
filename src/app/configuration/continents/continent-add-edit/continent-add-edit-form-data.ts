import { FORM_DATA_INPUT } from '../../../_constants/form-data';

export const FORM_DATA_CONTINENT_ADD_EDIT = [
  {
    id: '',
    title: '',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        className: 'size-full',
        label: 'captions.Continent.externalId',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'defaultName',
        className: 'size-full',
        label: 'captions.Continent.defaultName',
        validation: ['required'],
        newLine: true,
      },
    ],
  },
];
