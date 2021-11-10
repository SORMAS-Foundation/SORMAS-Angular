import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_FACILITY_ADD_EDIT = [
  {
    id: '',
    title: '',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'isoCode',
        label: 'captions.Country.isoCode',
        className: 'size-full',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'subcontinent.uuid',
        className: 'size-full',
        label: 'captions.Country.subcontinent',
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
