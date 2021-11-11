import { FORM_DATA_INPUT, FORM_DATA_WIDGET } from '../../../_constants/form-data';

export const FORM_DATA_COMMUNITY_ADD_EDIT = [
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
        className: 'size-full',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'region.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'district.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region.uuid',
            required: true,
            label: 'captions.region',
            newLine: true,
            className: 'size-full',
          },
          district: {
            key: 'district.uuid',
            required: true,
            label: 'captions.district',
            newLine: true,
            className: 'size-full',
            dependingOn: 'region',
          },
        },
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
