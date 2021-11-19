import { FORM_DATA_INPUT } from '../../_constants/form-data';

export const FORM_DATA_EVENT_GROUP_ADD = [
  {
    id: '',
    title: '',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'isoCode',
        label: 'captions.EventGroup.name',
        className: 'size-full',
        validation: ['required'],
        newLine: true,
      },
    ],
  },
];
