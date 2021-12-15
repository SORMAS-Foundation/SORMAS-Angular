import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_COUNTRY_ADD_EDIT = [
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
        ...FORM_DATA_INPUT,
        key: 'defaultName',
        className: 'size-full',
        label: 'captions.Country.defaultName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        className: 'size-full',
        label: 'captions.Country.externalId',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'unoCode',
        className: 'size-full',
        label: 'captions.Country.unoCode',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'subcontinent.uuid',
        className: 'size-full',
        label: 'captions.Country.subcontinent',
        validation: ['required'],
        service: 'subcontinentService',
        newLine: true,
      },
    ],
  },
];
