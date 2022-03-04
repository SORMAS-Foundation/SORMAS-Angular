import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_COMMUNITY_ADD_EDIT = [
  {
    id: 'details',
    title: '',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.name',
        validation: ['required'],
        className: 'size-full',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        service: 'regionService',
        validation: ['required'],
        className: 'size-full',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.district',
        service: 'districtService',
        determinedBy: ['region.uuid'],
        validation: ['required'],
        newLine: true,
        className: 'size-full',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.Community.externalID',
        className: 'size-full',
        newLine: true,
      },
    ],
  },
];
