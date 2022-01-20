import {
  MeansOfImmunization,
  Disease,
  ImmunizationManagementStatus,
  ImmunizationStatus,
  Sex,
} from '../../_constants/enums';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
} from '../../_constants/form-data';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const meansOfImmunizationOptions = pipe.transform(MeansOfImmunization);
const diseaseOptions = pipe.transform(Disease);
const immunizationManagementStatusOptions = pipe.transform(ImmunizationManagementStatus);
const immunizationStatusOptions = pipe.transform(ImmunizationStatus);
const optionsSex = pipe.transform(Sex);

export const FORM_DATA_IMMUNIZATION_ADD = [
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
        key: 'disease',
        newLine: true,
        label: 'captions.Immunization.disease',
        options: diseaseOptions,
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
        ...FORM_DATA_INPUT,
        key: 'numberOfDoses',
        label: 'captions.Immunization.numberOfDoses',
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
        options: [],
        service: 'regionService',
        required: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleDistrict.uuid',
        label: 'captions.Immunization.responsibleDistrict',
        options: [],
        service: 'districtService',
        determinedBy: 'responsibleRegion.uuid',
        required: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleCommunity.uuid',
        label: 'captions.Immunization.responsibleCommunity',
        options: [],
        service: 'communityService',
        determinedBy: 'responsibleDistrict.uuid',
        required: true,
        newLine: true,
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
        label: 'captions.facilityType',
        newLine: true,
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
        label: 'captions.Immunization.healthFacility',
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
        key: 'healthFacilityDetails',
        newLine: true,
        label: 'captions.Immunization.healthFacilityDetails',
      },
    ],
  },
  {
    id: 'personalInformation',
    title: 'personalInformation',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'captions.Person.sex',
        options: optionsSex,
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: 'captions.Person.phone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.Person.emailAddress',
      },
    ],
  },
];
