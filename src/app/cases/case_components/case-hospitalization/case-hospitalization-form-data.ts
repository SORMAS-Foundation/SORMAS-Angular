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
    title: _('Hospital Name'),
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
    title: _('Facility inpatient'),
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
    title: _('Date'),
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.admissionDate',
        hint: _('Admission'),
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.dischargeDate',
        hint: _('Discharge or transfer'),
      },
    ],
  },
  {
    id: 'hospitalization',
    title: _('Hospitalization'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'hospitalization.hospitalizationReason',
        label: _('Reasons for hospitalization'),
        options: optionsHospitalizationReason,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'hospitalization.otherHospitalizationReason',
        label: _('Specify reason'),
        className: 'size-large',
        dependingOn: 'hospitalization.hospitalizationReason',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    id: 'medicalAdvice',
    title: _('Left against medical advice'),
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
    title: _('Stay in intensive care unit'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.intensiveCareUnit',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitStart',
        hint: _('Start'),
        newLine: true,
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.intensiveCareUnitEnd',
        hint: _('End'),
        dependingOn: 'hospitalization.intensiveCareUnit',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'isolation',
    title: _('Isolation'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'hospitalization.isolated',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'hospitalization.isolationDate',
        hint: _('Date of isolation'),
        newLine: true,
        dependingOn: 'hospitalization.isolated',
        dependingOnValues: ['YES'],
      },
    ],
  },
];
