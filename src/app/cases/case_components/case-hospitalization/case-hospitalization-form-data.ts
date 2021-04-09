import {
  FORM_DATA_NULL,
  FORM_DATA_RADIO,
  FORM_DATA_DATE,
  FORM_DATA_SELECT,
  FORM_DATA_INPUT,
  YesNoUnknown,
  HospitalizationReason,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../shared/pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsHospitalizationReason = pipe.transform(HospitalizationReason);

export const FORM_DATA_CASE_HOSPITALIZATION = [
  {
    title: 'Hospital Name',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'healthFacility.caption',
        dependingOn: 'healthFacility.caption',
      },
      {
        ...FORM_DATA_NULL,
        key: 'healthFacilityDetails',
        dependingOn: 'facilityType',
        dependingOnValues: ['OTHER_CARE_FACILITY'],
      },
    ],
  },
  {
    title: 'Facility inpatient',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.admittedToHealthFacility',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: 'Date',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.admissionDate',
        hint: 'Admission',
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.dischargeDate',
        hint: 'Discharge or transfer',
      },
    ],
  },
  {
    title: 'Hospitalization',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'hospitalization.hospitalizationReason',
        label: 'Reasons for hospitalization',
        options: optionsHospitalizationReason,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'hospitalization.otherHospitalizationReason',
        label: 'Specify reason',
        className: 'size-large',
        dependingOn: 'hospitalization.hospitalizationReason',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    title: 'Left against medical advise',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.leftAgainstAdvice',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: 'Stay in intensive care unit',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.intensiveCareUnit',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitStart',
        hint: 'Start',
        newLine: true,
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitEnd',
        hint: 'End',
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['Yes'],
      },
    ],
  },
  {
    title: 'Isolation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.isolated',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.isolationDate',
        hint: 'Date of isolation',
        newLine: true,
        dependingOn: 'hospitalization.isolated',
        dependingOnValues: ['YES'],
      },
    ],
  },
];
