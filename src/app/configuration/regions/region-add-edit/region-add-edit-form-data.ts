import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_REGION_ADD_EDIT = [
  {
    id: '',
    title: '',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.name',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidCode',
        label: 'captions.Region.epidCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        label: 'captions.country',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'area.uuid',
        label: 'captions.area',
        newLine: true,
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.Region.externalID',
        newLine: true,
      },
    ],
  },
];
