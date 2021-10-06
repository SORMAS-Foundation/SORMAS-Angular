import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_DISTRICT_ADD_EDIT = [
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
        label: 'captions.District.epidCode',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        className: 'size-full',
        label: 'captions.region',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        className: 'size-full',
        label: 'captions.District.externalID',
        newLine: true,
      },
    ],
  },
];
