import {
  Disease,
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_WIDGET,
  ImmunizationManagementStatus,
  ImmunizationStatus,
  MeansOfImmunization,
  YesNoUnknown,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const meansOfImmunizationOptions = pipe.transform(MeansOfImmunization);
const diseaseOptions = pipe.transform(Disease);
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const immunizationManagementStatusOptions = pipe.transform(ImmunizationManagementStatus);
const immunizationStatusOptions = pipe.transform(ImmunizationStatus);

export const FORM_DATA_IMMUNIZATION_PROFILE = [
  {
    id: 'immunizationData',
    title: 'immunizationData',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        label: 'captions.Immunization.reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'meansOfImmunization',
        label: 'captions.Immunization.meansOfImmunization',
        options: meansOfImmunizationOptions,
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalDetails',
        label: 'captions.Immunization.meansOfImmunizationDetails',
        dependingOn: 'meansOfImmunization',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'captions.Immunization.startDate',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'captions.Immunization.endDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'validFrom',
        label: 'captions.Immunization.validFrom',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'validUntil',
        label: 'captions.Immunization.validUntil',
      },
    ],
  },
  {
    id: 'recovery',
    title: 'strings.headingRecovery',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'positiveTestResultDate',
        label: 'captions.Immunization.positiveTestResultDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'recoveryDate',
        label: 'captions.Immunization.recoveryDate',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-immunization-recovery',
        className: 'float-right',
        key: 'caze',
      },
    ],
  },
  {
    id: 'vaccination',
    title: 'strings.headingVaccination',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineDose',
        label: 'captions.Immunization.numberOfDoses',
      },
    ],
  },
  {
    id: 'externalData',
    title: 'externalData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.Immunization.externalId',
      },
    ],
  },
  {
    id: 'disease',
    title: 'captions.Immunization.disease',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.Immunization.disease',
        options: diseaseOptions,
        validation: ['required'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'previousInfection',
        label: 'captions.Immunization.previousInfection',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastInfectionDate',
        label: 'captions.Immunization.lastInfectionDate',
        options: optionsYesNoUnknown,
        dependingOn: 'previousInfection',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'managementImmunization',
    title: 'managementImmunization',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'immunizationManagementOverwrite',
        label: 'captions.Immunization.overwriteImmunizationManagementStatus',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'immunizationManagementStatus',
        label: 'captions.Immunization.immunizationManagementStatus',
        options: immunizationManagementStatusOptions,
        disabled: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'immunizationStatus',
        label: 'captions.Immunization.immunizationStatus',
        disabled: true,
        options: immunizationStatusOptions,
      },
    ],
  },
  {
    id: 'responsibleJurisdiction',
    title: 'strings.headingResponsibleJurisdiction',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleRegion.uuid',
        label: 'captions.Immunization.responsibleRegion',
        service: 'regionService',
        required: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleDistrict.uuid',
        label: 'captions.Immunization.responsibleDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'responsibleRegion.uuid',
            keyMap: 'region.uuid',
          },
        ],
        required: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleCommunity.uuid',
        label: 'captions.Immunization.responsibleCommunity',
        service: 'communityService',
        determinedBy: [
          {
            key: 'responsibleDistrict.uuid',
            keyMap: 'district.uuid',
          },
        ],
        required: true,
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.Facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.Facility.typeGroup',
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.Facility.type',
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'captions.Immunization.healthFacility',
        service: 'facilityService',
        fallbackOption: {
          fallbackOptionKey: 'OTHER_FACILITY',
          fallbackOptionValue: 'captions.Facility.OTHER_FACILITY',
        },
        determinedBy: [
          {
            key: 'responsibleDistrict.uuid',
            keyMap: 'district.uuid',
          },
          {
            key: 'responsibleCommunity.uuid',
            keyMap: 'community.uuid',
            optional: true,
          },
          {
            key: 'facilityTypeGroup',
            keyMap: 'typeGroup',
          },
          {
            key: 'facilityType',
            keyMap: 'type',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        newLine: true,
        label: 'captions.Immunization.healthFacilityDetails',
        dependingOn: 'healthFacility.uuid',
        dependingOnValues: ['OTHER_FACILITY'],
        validation: ['required'],
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
        label: 'captions.Immunization.country',
        options: [],
        service: 'countryService',
      },
    ],
  },
];
