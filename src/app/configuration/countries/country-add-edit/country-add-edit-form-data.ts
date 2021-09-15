import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_COUNTRY_ADD_EDIT = [
  {
    id: '',
    title: '',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'isoCode',
        label: 'captions.Country.isoCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'defaultName',
        label: 'captions.Country.isoCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.Country.isoCode',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'unoCode',
        label: 'captions.Country.isoCode',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'subcontinent',
        label: 'captions.CaseData.responsibleRegion',
        validation: ['required'],
        newLine: true,
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
];
