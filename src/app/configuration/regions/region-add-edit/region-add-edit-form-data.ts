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
        className: 'size-full',
        label: 'captions.name',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidCode',
        className: 'size-full',
        label: 'captions.Region.epidCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        className: 'size-full',
        label: 'captions.country',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'area.uuid',
        className: 'size-full',
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
        className: 'size-full',
        label: 'captions.Region.externalID',
        newLine: true,
      },
    ],
  },
];
