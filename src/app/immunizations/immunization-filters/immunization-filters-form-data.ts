import {
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  FORM_DATA_DATE,
  DateFilterOptions,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const diseaseOptions = pipe.transform(Disease);
const dateFilterOptions = pipe.transform(DateFilterOptions);

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
    id: 'birthdate',
    title: 'headingBirthdate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateYYYY',
        options: [],
        placeholder: 'captions.Person.birthdateYYYY',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateMM',
        options: [],
        placeholder: 'captions.Person.birthdateMM',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateDD',
        options: [],
        placeholder: 'captions.Person.birthdateDD',
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
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        placeholder: 'captions.CaseData.facilityType',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility',
        placeholder: 'captions.facility',
        options: [],
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
        ...FORM_DATA_DATE,
        key: 'newImmunizationDateFrom',
        hint: 'strings.date',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'newImmunizationDateTo',
        hint: 'strings.date.to',
        className: 'fullwidth',
      },
    ],
  },
];
