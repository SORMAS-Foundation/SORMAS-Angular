import {
  FORM_DATA_RADIO,
  EntityRelevanceStatusOptions,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  UserRole,
  FORM_DATA_DATE,
  ContactStatus,
  ContactCategory,
  YesNoUnknown,
  ContactClassification,
  CaseClassification,
  SymptomJournalStatus,
  VaccinationStatus,
  FollowupStatus,
  ContactRelation,
  QuarantineType,
  DateFilterOptions,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const contactStatusOptions = pipe.transform(ContactStatus);
const contactCategoryOptions = pipe.transform(ContactCategory);
const yesNoUnknownOptions = pipe.transform(YesNoUnknown);
const relevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);
const quarantineOptions = pipe.transform(QuarantineType);
const contactClassificationOptions = pipe.transform(ContactClassification);
const diseaseOptions = pipe.transform(Disease);
const caseClassificationOptions = pipe.transform(CaseClassification);
const symptomJournalStatusOptions = pipe.transform(SymptomJournalStatus);
const vaccinationStatusOptions = pipe.transform(VaccinationStatus);
const followupStatusOptions = pipe.transform(FollowupStatus);
const userRoleOptions = pipe.transform(UserRole);
const contactRelationOptions = pipe.transform(ContactRelation);
const dateFilterOptions = pipe.transform(DateFilterOptions);
const quarantineDetailsOptions = [
  {
    key: 'quarantine_ordered_verbally',
    value: 'captions.Contact.quarantineOrderedVerbally',
  },
  {
    key: 'quarantine_ordered_document',
    value: 'captions.Contact.quarantineOrderedOfficialDocument',
  },
  {
    key: 'no_quarantine',
    value: 'captions.contactQuarantineNotOrdered',
  },
  {
    key: 'help_needed',
    value: 'captions.contactOnlyQuarantineHelpNeeded',
  },
  {
    key: 'contacts_extended_quarantine',
    value: 'captions.contactOnlyWithExtendedQuarantine',
  },
  {
    key: 'contacts_reduce_quarantine',
    value: 'captions.contactOnlyWithReducedQuarantine',
  },
];

const moreFiltersOptions = [
  {
    key: 'high_priority_contacts',
    value: 'captions.contactOnlyHighPriorityContacts',
  },
  {
    key: 'contacts_with_source',
    value: 'captions.contactOnlyWithSharedEventWithSourceCase',
  },
  {
    key: 'contacts_from_other',
    value: 'captions.contactOnlyFromOtherInstances',
  },
];

export const FORM_DATA_CONTACT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'contactOrCaseLike',
        placeholder: 'strings.promptContactsSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevance',
    title: 'captions.contactContactsOverview',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: relevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'status',
    title: 'captions.Contact.contactStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'contactStatus',
        options: contactStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'category',
    title: 'captions.Contact.contactCategory',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'contactCategory',
        options: contactCategoryOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'returningTraveler',
    title: 'captions.Contact.returningTraveler',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'returningTraveler',
        options: yesNoUnknownOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'events',
    title: 'strings.entityEvents',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'eventLike',
        placeholder: 'strings.promptEventsSearchFieldEventGroups',
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
        key: 'contactClassification',
        placeholder: 'captions.Contact.contactClassification',
        options: contactClassificationOptions,
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
        placeholder: 'captions.Contact.caze.caseClassification',
        options: caseClassificationOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptomJournalStatus',
        placeholder: 'captions.Contact.symptomJournalStatus',
        options: symptomJournalStatusOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationStatus',
        placeholder: 'captions.Contact.vaccinationStatus',
        options: vaccinationStatusOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'followUpStatus',
        placeholder: 'captions.Contact.followUpStatus',
        options: followupStatusOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntilTo',
        hint: 'captions.Contact.followUpUntil',
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
        placeholder: 'captions.Contact.regionUuid',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        options: [],
        service: 'districtService',
        determinedBy: 'region.uuid',
        placeholder: 'captions.Contact.districtUuid',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        options: [],
        service: 'communityService',
        determinedBy: 'district.uuid',
        placeholder: 'captions.Contact.communityUuid',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'contactOfficer',
        placeholder: 'captions.Contact.contactOfficer',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'relationToCase',
        placeholder: 'captions.Contact.relationToCase',
        options: contactRelationOptions,
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
        ...FORM_DATA_SELECT,
        key: 'moreFilters',
        placeholder: 'captions.actionShowMoreFilters',
        options: moreFiltersOptions,
        multipleChoice: true,
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'quarantine',
    title: 'captions.Contact.quarantine',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'quarantineType',
        options: quarantineOptions,
        placeholder: 'captions.Contact.quarantine',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantineDetails',
        placeholder: 'captions.Contact.quarantineTypeDetails',
        options: quarantineDetailsOptions,
        multipleChoice: true,
        className: 'filters-field-compact fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        hint: 'captions.Contact.quarantineTo',
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
        key: 'contactDateType',
        options: [],
        placeholder: 'strings.promptContactDateType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'creationDateFrom',
        hint: 'strings.promptContactDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'creationDateTo',
        hint: 'strings.promptContactDateTo',
        className: 'fullwidth',
      },
    ],
  },
];

export const FORM_DATA_CASE_CONTACT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'contactOrCaseLike',
        placeholder: 'strings.promptContactsSearchField',
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
        key: 'contactClassification',
        placeholder: 'captions.Contact.contactClassification',
        options: contactClassificationOptions,
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
        ...FORM_DATA_SEARCHBOX,
        key: 'personLike',
        placeholder: 'captions.Contact.person',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        placeholder: 'captions.Contact.regionUuid',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        placeholder: 'captions.Contact.districtUuid',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'contactOfficer',
        placeholder: 'captions.Contact.contactOfficer',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
];
