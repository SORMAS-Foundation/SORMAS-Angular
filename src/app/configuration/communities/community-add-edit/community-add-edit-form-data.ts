import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_COMMUNITY_ADD_EDIT = [
  {
    id: '',
    title: '',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'defaultName',
        label: 'captions.Country.isoCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        newLine: true,
        label: 'captions.CaseData.responsibleRegion',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        label: 'captions.CaseData.responsibleDistrict',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.Country.isoCode',
        newLine: true,
      },
    ],
  },
];
