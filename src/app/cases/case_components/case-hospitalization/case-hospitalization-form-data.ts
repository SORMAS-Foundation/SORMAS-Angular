import {
  FORM_DATA_NULL,
  FORM_DATA_RADIO,
  FORM_DATA_DATE,
  FORM_DATA_SELECT,
  FORM_DATA_INPUT,
  YesNoUnknown,
  HospitalizationReason,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsHospitalizationReason = pipe.transform(HospitalizationReason);

export const FORM_DATA_CASE_HOSPITALIZATION = [
  {
    id: 'hospital',
    title: 'CaseHospitalization.healthFacility',
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
    id: 'facility',
    title: 'CaseHospitalization.facilityInpatient',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.admittedToHealthFacility',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'date',
    title: 'date',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.admissionDate',
        hint: 'CaseHospitalization.admissionDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.dischargeDate',
        hint: 'CaseHospitalization.dischargeDate',
      },
    ],
  },
  {
    id: 'hospitalization',
    title: 'CaseHospitalization',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'hospitalization.hospitalizationReason',
        label: 'CaseHospitalization.hospitalizationReason',
        options: optionsHospitalizationReason,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'hospitalization.otherHospitalizationReason',
        label: 'CaseHospitalization.otherHospitalizationReason',
        className: 'size-large',
        dependingOn: 'hospitalization.hospitalizationReason',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    id: 'medicalAdvice',
    title: 'CaseHospitalization.leftAgainstAdvice',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.leftAgainstAdvice',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'intensiveCare',
    title: 'CaseHospitalization.intensiveCareUnit',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.intensiveCareUnit',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitStart',
        hint: 'CaseHospitalization.intensiveCareUnitStart',
        newLine: true,
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitEnd',
        hint: 'CaseHospitalization.intensiveCareUnitEnd',
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'isolation',
    title: 'CaseHospitalization.isolation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.isolated',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.isolationDate',
        hint: 'CaseHospitalization.isolationDate',
        newLine: true,
        dependingOn: 'hospitalization.isolated',
        dependingOnValues: ['YES'],
      },
    ],
  },
];
