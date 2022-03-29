import {
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  EntityRelevanceStatusOptions,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  CaseOutcome,
  CaseOrigin,
  Disease,
  CaseClassification,
  FollowupStatus,
  Presentcondition,
  UserRole,
  FORM_DATA_DATE,
  SymptomJournalStatus,
  DateFilterOptions,
  NewCaseDateType,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const caseRelevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);
const caseOutcomeOptions = pipe.transform(CaseOutcome);
const caseOriginOptions = pipe.transform(CaseOrigin);
const diseaseOptions = pipe.transform(Disease);
const caseClassificationOptions = pipe.transform(CaseClassification);
const followupStatusOptions = pipe.transform(FollowupStatus);
const presentConditionOptions = pipe.transform(Presentcondition);
const userRoleOptions = pipe.transform(UserRole);
const symptomJournalStatusOptions = pipe.transform(SymptomJournalStatus);
const dateFilterOptions = pipe.transform(DateFilterOptions);
const newCaseDateType = pipe.transform(NewCaseDateType);
const moreFiltersOptions = [
  {
    key: 'WITHOUT_GEO',
    value: 'captions.caseFilterWithoutGeo',
  },
  {
    key: 'PORT_HEALTH_WITHOUT_FACILITY',
    value: 'captions.caseFilterPortHealthWithoutFacility',
  },
  {
    key: 'WITH_CASE_MANAGEMENT_DATA',
    value: 'captions.caseFilterCasesWithCaseManagementData',
  },
  {
    key: 'WITHOUT_RESPONSIBLE_OFFICER',
    value: 'captions.caseFilterWithoutResponsibleOfficer',
  },
  {
    key: 'WITH_EXTENDED_QUARANTINE',
    value: 'captions.caseFilterWithExtendedQuarantine',
  },
];

export const FORM_DATA_MERGE_DUPLICATE_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'caseLike',
        placeholder: 'strings.promptCasesSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevance',
    title: 'strings.entityCases',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: caseRelevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'origin',
    title: 'captions.CaseData.caseOrigin',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseOrigin',
        options: caseOriginOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'events',
    title: 'captions.caseEvents',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'eventLike',
        placeholder: 'strings.promptCaseOrContactEventSearchField',
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
        key: 'outcome',
        placeholder: 'captions.CaseData.outcome',
        options: caseOutcomeOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        placeholder: 'captions.disease',
        options: diseaseOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'caseClassification',
        placeholder: 'captions.CaseData.caseClassification',
        options: caseClassificationOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'followUpStatus',
        placeholder: 'captions.CaseData.followUpStatus',
        options: followupStatusOptions,
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        service: 'regionService',
        placeholder: 'captions.CaseData.responsibleRegion',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        placeholder: 'captions.CaseData.responsibleDistrict',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        placeholder: 'captions.CaseData.responsibleCommunity',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        placeholder: 'captions.Facility.typeGroup',
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        placeholder: 'captions.Facility.type',
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        placeholder: 'captions.Facility',
        service: 'facilityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
          {
            key: 'community.uuid',
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
        key: 'presentCondition',
        placeholder: 'captions.Person.presentCondition',
        options: presentConditionOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'surveillanceOfficer',
        placeholder: 'captions.CaseData.surveillanceOfficer',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'reportingUserRole',
        placeholder: 'strings.reportedBy',
        options: userRoleOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportingUserLike',
        placeholder: 'captions.CaseData.reportingUser',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'creatorUserLike',
        placeholder: 'captions.Task.creatorUser',
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
        allowClear: false,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'newCaseDateType',
        options: newCaseDateType,
        placeholder: 'strings.promptNewCaseDateType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'newCaseDateFrom',
        hint: 'strings.promptCasesDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'newCaseDateTo',
        hint: 'strings.promptDateTo',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        hint: 'captions.CaseData.quarantineTo',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntilTo',
        hint: 'captions.CaseData.followUpUntil',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'more',
    title: 'headingMoreFilters',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptomJournalStatus',
        options: symptomJournalStatusOptions,
        placeholder: 'captions.CaseData.symptomJournalStatus',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'morefilters',
        placeholder: 'headingMoreFilters',
        options: moreFiltersOptions,
        multipleChoice: true,
        className: 'filters-field-compact fullwidth',
      },
    ],
  },
];
