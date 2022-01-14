import { FORM_DATA_CHECKBOX, FORM_DATA_RADIO } from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

export const FORM_DATA_MAP_LAYERS = [
  {
    id: 'cases',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'showCases',
        label: 'captions.dashboardShowCases',
        className: 'fullwidth small',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'mapCaseDisplayMode',
        options: [
          {
            key: 'CASE_ADDRESS',
            value: 'enum.MapCaseDisplayMode.CASE_ADDRESS',
          },
          {
            key: 'FACILITY_OR_CASE_ADDRESS',
            value: 'enum.MapCaseDisplayMode.FACILITY_OR_CASE_ADDRESS',
          },
          {
            key: 'FACILITY',
            value: 'enum.MapCaseDisplayMode.FACILITY',
          },
        ],
        value: 'FACILITY_OR_CASE_ADDRESS',
        dependingOn: 'showCases',
        className: 'fullwidth compact font-normal',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'mapCaseClassificationOption',
        options: [
          {
            key: 'ALL_CASES',
            value: 'enum.MapCaseClassificationOption.ALL_CASES',
          },
          {
            key: 'CONFIRMED_CASES_ONLY',
            value: 'enum.MapCaseClassificationOption.CONFIRMED_CASES_ONLY',
          },
        ],
        value: 'ALL_CASES',
        dependingOn: 'showCases',
        className: 'fullwidth compact font-normal',
      },
    ],
  },
  {
    id: 'contacts',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'showContacts',
        label: 'captions.dashboardShowContacts',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'confirmedContacts',
        label: 'captions.dashboardShowConfirmedContacts',
        value: true,
        dependingOn: 'showContacts',
        className: 'fullwidth compact font-normal',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'unconfirmedContacts',
        label: 'captions.dashboardShowUnconfirmedContacts',
        value: true,
        dependingOn: 'showContacts',
        className: 'fullwidth compact font-normal',
      },
    ],
  },
  {
    id: 'events',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'showEvents',
        label: 'captions.dashboardShowEvents',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'regions',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'showRegions',
        label: 'captions.dashboardShowRegions',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'caseMeasure',
        options: [
          {
            key: 'CASE_COUNT',
            value: 'enum.CaseMeasure.CASE_COUNT',
          },
          {
            key: 'CASE_INCIDENCE',
            value: 'enum.CaseMeasure.CASE_INCIDENCE',
          },
        ],
        value: 'CASE_COUNT',
        dependingOn: 'showRegions',
        className: 'fullwidth compact font-normal',
      },
    ],
  },
  {
    id: 'other',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'hideOtherCountries',
        label: 'captions.dashboardHideOtherCountries',
        className: 'fullwidth compact font-normal',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'mapShowEpiSituation',
        label: 'captions.dashboardMapShowEpiSituation',
        className: 'fullwidth compact font-normal',
      },
    ],
  },
];
