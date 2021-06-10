import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
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
    title: _('CaseHospitalization.healthFacility'),
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
    title: _('CaseHospitalization.facilityInpatient'),
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
    title: _('date'),
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.admissionDate',
        hint: _('CaseHospitalization.admissionDate'),
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.dischargeDate',
        hint: _('CaseHospitalization.dischargeDate'),
      },
    ],
  },
  {
    id: 'hospitalization',
    title: _('CaseHospitalization'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'hospitalization.hospitalizationReason',
        label: _('CaseHospitalization.hospitalizationReason'),
        options: optionsHospitalizationReason,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'hospitalization.otherHospitalizationReason',
        label: _('CaseHospitalization.otherHospitalizationReason'),
        className: 'size-large',
        dependingOn: 'hospitalization.hospitalizationReason',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    id: 'medicalAdvice',
    title: _('CaseHospitalization.leftAgainstAdvice'),
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
    title: _('CaseHospitalization.intensiveCareUnit'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.intensiveCareUnit',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitStart',
        hint: _('CaseHospitalization.intensiveCareUnitStart'),
        newLine: true,
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitEnd',
        hint: _('CaseHospitalization.intensiveCareUnitEnd'),
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'isolation',
    title: _('CaseHospitalization.isolation'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.isolated',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.isolationDate',
        hint: _('CaseHospitalization.isolationDate'),
        newLine: true,
        dependingOn: 'hospitalization.isolated',
        dependingOnValues: ['YES'],
      },
    ],
  },
];
