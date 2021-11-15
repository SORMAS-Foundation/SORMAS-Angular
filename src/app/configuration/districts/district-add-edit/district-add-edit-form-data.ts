import { FORM_DATA_INPUT, FORM_DATA_WIDGET } from '../../../_constants/form-data';

export const FORM_DATA_DISTRICT_ADD_EDIT = [
  {
    id: 'details',
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
        ...FORM_DATA_INPUT,
        key: 'region.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region.uuid',
            label: 'captions.region',
            className: 'size-full',
            required: true,
            newLine: true,
          },
        },
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
