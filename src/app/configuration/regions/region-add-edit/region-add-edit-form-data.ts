import { FORM_DATA_INPUT, FORM_DATA_SELECT, FORM_DATA_WIDGET } from '../../../_constants/form-data';

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
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          country: {
            key: 'country.uuid',
            label: 'captions.country',
            newLine: true,
            className: 'size-full',
          },
        },
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
