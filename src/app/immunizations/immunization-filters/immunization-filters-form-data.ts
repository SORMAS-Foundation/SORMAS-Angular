import {
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  FORM_DATA_DATE,
  DateFilterOptions,
  MeansOfImmunization,
  ImmunizationManagementStatus,
  ImmunizationStatus,
  ImmunizationReferenceDate,
  FORM_DATA_CHECKBOX,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const diseaseOptions = pipe.transform(Disease);
const dateFilterOptions = pipe.transform(DateFilterOptions);
const meansOfImmunizationOptions = pipe.transform(MeansOfImmunization);
const immunizationManagementStatusOptions = pipe.transform(ImmunizationManagementStatus);
const immunizationStatusOptions = pipe.transform(ImmunizationStatus);
const immunizationReferenceDateOptions = pipe.transform(ImmunizationReferenceDate);

export const FORM_DATA_IMMUNIZATION_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'immunizationLike',
        placeholder: 'strings.promptCampaignSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'medicalAspect',
    title: 'headingMedicalAspects',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        placeholder: 'captions.disease',
        options: diseaseOptions,
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'headingBirthdate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateYYYY',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        placeholder: 'captions.Person.birthdateYYYY',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateMM',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        placeholder: 'captions.Person.birthdateMM',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateDD',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        placeholder: 'captions.Person.birthdateDD',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'immunization',
    title: 'Immunization',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'meansOfImmunization',
        placeholder: 'captions.Immunization.meansOfImmunization',
        options: meansOfImmunizationOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'immunizationManagementStatus',
        placeholder: 'captions.Immunization.immunizationManagementStatus',
        options: immunizationManagementStatusOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'immunizationStatus',
        placeholder: 'captions.Immunization.immunizationStatus',
        options: immunizationStatusOptions,
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'overdueImmunization',
    title: 'overdueImmunization',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'overdueImmunization',
        label: 'captions.immunizationOnlyPersonsWithOverdueImmunization',
        className: 'filter-checkbox',
      },
    ],
  },
  {
    id: 'adminAspect',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        options: [],
        service: 'regionService',
        placeholder: 'strings.entityRegion',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        options: [],
        service: 'districtService',
        determinedBy: 'region.uuid',
        placeholder: 'strings.entityDistricts',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        options: [],
        service: 'communityService',
        determinedBy: 'district.uuid',
        placeholder: 'strings.entityCommunities',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.facility',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        placeholder: 'captions.facilityTypeGroup',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        placeholder: 'captions.facilityType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility',
        placeholder: 'captions.facility',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'headingDateFilter',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'dateFilterOption',
        options: dateFilterOptions,
        value: 'DATE',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'immunizationReference',
        options: immunizationReferenceDateOptions,
        placeholder: 'immunizationReference',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'newImmunizationEpidFrom',
        options: [],
        className: 'fullwidth',
        dependingOn: 'dateFilterOption',
        dependingOnValues: ['EPI_WEEK'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'newImmunizationEpidTo',
        options: [],
        className: 'fullwidth',
        dependingOn: 'dateFilterOption',
        dependingOnValues: ['EPI_WEEK'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'newImmunizationDateFrom',
        hint: 'From',
        className: 'fullwidth',
        dependingOn: 'dateFilterOption',
        dependingOnValues: ['DATE'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'newImmunizationDateTo',
        hint: 'to',
        className: 'fullwidth',
        dependingOn: 'dateFilterOption',
        dependingOnValues: ['DATE'],
      },
    ],
  },
];
