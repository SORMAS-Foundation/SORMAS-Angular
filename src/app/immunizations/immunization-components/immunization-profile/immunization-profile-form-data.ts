import {
  Disease,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  MeansOfImmunization,
  YesNoUnknown,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const meansOfImmunizationOptions = pipe.transform(MeansOfImmunization);
const diseaseOptions = pipe.transform(Disease);
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_IMMUNIZATION_PROFILE = [
  {
    id: 'immunizationData',
    title: 'Immunization data',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        label: 'captions.CaseData.reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'meansOfImmunization',
        label: 'meansOfImmunization',
        options: meansOfImmunizationOptions,
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'startDate',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'endDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'validFrom',
        label: 'Valid from',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'validUntil',
        label: 'Valid until',
      },
    ],
  },
  {
    id: 'immunizationData',
    title: 'Immunization data',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'positiveTestResultDate',
        label: 'Date of first positive test results',
      },
      {
        ...FORM_DATA_DATE,
        key: 'recoveryDate',
        label: 'immunizationReferenceDate.recovery_date',
      },
    ],
  },
  {
    id: 'externalData',
    title: 'CaseData.externalData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.CaseData.externalID',
      },
    ],
  },
  {
    id: 'disease',
    title: 'captions.disease',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        placeholder: 'captions.disease',
        options: diseaseOptions,
        validation: ['required'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'previousInfection',
        label: 'Previous infection with this disease',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastInfectionDate',
        label: 'captions.CaseData.previousInfectionDate',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'responsibleJurisdiction',
    title: 'strings.headingCaseResponsibleJurisidction',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleRegion.uuid',
        label: 'captions.CaseData.responsibleRegion',
        options: [],
        service: 'regionService',
        required: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleDistrict.uuid',
        label: 'captions.CaseData.responsibleDistrict',
        options: [],
        service: 'districtService',
        determinedBy: 'responsibleRegion.uuid',
        required: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleCommunity.uuid',
        label: 'captions.CaseData.responsibleCommunity',
        options: [],
        service: 'communityService',
        determinedBy: 'responsibleDistrict.uuid',
        required: true,
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.facilityTypeGroup',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.CaseData.facilityType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility',
        label: 'captions.facility',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        newLine: true,
        label: 'captions.CaseData.healthFacilityDetails',
      },
    ],
  },
  {
    id: 'country',
    title: 'captions.country',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        label: 'immunization country',
        options: [],
        service: 'countryService',
      },
    ],
  },
];
