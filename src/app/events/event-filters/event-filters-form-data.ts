import {
  FORM_DATA_RADIO,
  EntityRelevanceStatusOptions,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  UserRole,
  FORM_DATA_DATE,
  RiskLevel,
  EventStatusOptions,
  EventInvestigationStatusOptions,
  ContactCountMethod,
  InformationSource,
  TypeOfPlace,
  DateFilterOptions,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const riskLevelOptions = pipe.transform(RiskLevel);
const eventStatusOptions = pipe.transform(EventStatusOptions);
const investigationStatusOptions = pipe.transform(EventInvestigationStatusOptions);
const relevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);
const countMethodOptions = pipe.transform(ContactCountMethod);
const diseaseOptions = pipe.transform(Disease);
const informationSourceOptions = pipe.transform(InformationSource);
const typeOfPlaceOptions = pipe.transform(TypeOfPlace);
const userRoleOptions = pipe.transform(UserRole);
const dateFilterOptions = pipe.transform(DateFilterOptions);

export const FORM_DATA_EVENT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptEventsSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'riskLevel',
    title: 'captions.Event.riskLevel',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'riskLevel',
        options: riskLevelOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'eventStatus',
    title: 'captions.EventAction.eventStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'eventStatus',
        options: eventStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'investigationStatus',
    title: 'captions.Event.eventInvestigationStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'eventInvestigationStatus',
        options: investigationStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'relevance',
    title: 'captions.eventDefaultView',
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
    id: 'participants',
    title: 'captions.eventEventParticipants',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeTextEventParticipants',
        placeholder: 'strings.promptEventsSearchFieldEventParticipants',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'group',
    title: 'captions.EventGroup',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeTextEventGroups',
        placeholder: 'strings.promptEventsSearchFieldEventGroups',
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
        placeholder: 'captions.Event.diseaseShort',
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
        key: 'reportingUserRole',
        placeholder: 'strings.reportedBy',
        options: userRoleOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'responsibleUser',
        placeholder: 'captions.Event.responsibleUser',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        options: [],
        service: 'regionService',
        placeholder: 'captions.EventParticipant.region',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        options: [],
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        placeholder: 'captions.EventParticipant.district',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        options: [],
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        placeholder: 'Event.responsibleCommunity',
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
        ...FORM_DATA_DATE,
        key: 'eventDateFrom',
        hint: 'strings.promptEventDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'eventDateTo',
        hint: 'strings.promptEventDateTo',
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
        key: 'countMethod',
        options: countMethodOptions,
        placeholder: 'captions.Event.contactCountMethod',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'srcType',
        options: informationSourceOptions,
        placeholder: 'captions.Event.srcType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'typeOfPlace',
        options: typeOfPlaceOptions,
        placeholder: 'captions.Event.typeOfPlace',
        className: 'fullwidth',
      },
    ],
  },
];
