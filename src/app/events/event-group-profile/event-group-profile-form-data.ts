import { FORM_DATA_INPUT, FORM_DATA_NULL } from '../../app.constants';

export const FORM_DATA_EVENT_GROUP = [
  {
    id: 'details',
    title: 'captions.EventGroup',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: 'captions.EventGroup.uuid',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.EventGroup.name',
        validation: ['required'],
        newLine: true,
      },
    ],
  },
];
