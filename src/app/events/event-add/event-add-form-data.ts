import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  EventStatusOptions,
  EventManagementStatusOptions,
  YesNoUnknown,
  FORM_DATA_CHECKBOX,
  InvestigationStatusOptions,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const eventStatusOptions = pipe.transform(EventStatusOptions);
const eventManagementStatusOptions = pipe.transform(EventManagementStatusOptions);
const yesNoUnknown = pipe.transform(YesNoUnknown);
const investigationStatusOptions = pipe.transform(InvestigationStatusOptions);

export const FORM_DATA_EVENT_ADD = [
  {
    id: 'eventData',
    title: 'strings.headingEventData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.Event.reportDateTime',
        key: 'reportDate',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'internalToken',
        label: 'captions.Event.internalToken',
      },
    ],
  },
  {
    id: 'externalData',
    title: 'Event.externalData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.Event.externalId',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'captions.Event.externalToken',
      },
    ],
  },
  {
    id: 'event',
    title: 'strings.entityEvent',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'eventStatus',
        label: 'captions.EventAction.eventStatus',
        validation: ['required'],
        options: eventStatusOptions,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'riskLevel',
        label: 'captions.Event.riskLevel',
        newLine: true,
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'eventManagementStatus',
        label: 'captions.Event.eventManagementStatus',
        newLine: true,
        validation: ['required'],
        options: eventManagementStatusOptions,
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'title',
        label: 'captions.Event.eventTitle',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'captions.description',
      },
    ],
  },
  {
    id: 'date',
    title: 'captions.date',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'captions.Event.startDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'captions.Event.endDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'clusterEvolutionDate',
        label: 'captions.Event.evolutionDate',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'natureClusterEvolution',
        label: 'captions.Event.evolutionComment',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
  {
    id: 'transmission',
    title: 'headingTransmission',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'primaryModeTransmission',
        label: 'captions.Event.diseaseTransmissionMode',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'humanTransmission',
        label: 'captions.Event.humanTransmissionMode',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'parentalTransmission',
        label: 'captions.Event.parenteralTransmissionMode',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'medicallyAssociatedTransmission',
        label: 'captions.Event.medicallyAssociatedTransmissionMode',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'nosocomial',
        label: 'captions.Event.nosocomial',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionPath',
        newLine: true,
        label: 'captions.Event.infectionPathCertainty',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epidemiologicalEvidence',
        label: 'captions.Event.epidemiologicalEvidence',
        newLine: true,
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'study',
        label: 'enum.EpidemiologicalEvidenceDetail.STUDY',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'explorativeSurvey',
        label: 'enum.EpidemiologicalEvidenceDetail.EXPLORATIVE_SURVEY_OF_AFFECTED',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'ascertainedData',
        label: 'enum.EpidemiologicalEvidenceDetail.DESCRIPTIVE_ANALYSIS_OF_ASCERTAINED_DATA',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'suspicion',
        label: 'enum.EpidemiologicalEvidenceDetail.SUSPICION',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'laboratoryDiagnosticEvidence',
        label: 'captions.Event.laboratoryDiagnosticEvidence',
        options: yesNoUnknown,
        newLine: true,
      },
    ],
  },
  {
    id: 'investigation',
    title: 'headingInvestigation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        label: 'captions.Event.eventInvestigationStatus',
        options: investigationStatusOptions,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'captions.Event.eventInvestigationStartDate',
        newLine: true,
        key: 'startInvestigationDate',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Event.eventInvestigationEndDate',
        key: 'endInvestigationDate',
      },
    ],
  },
  {
    id: 'sourceInformation',
    title: 'captions.Event.informationSource',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'sourceType',
        label: 'captions.Event.srcType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sourceInstitutionalPartnerType',
        label: 'captions.Event.srcInstitutionalPartnerType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceFirstName',
        label: 'captions.Event.srcFirstName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceLastName',
        label: 'captions.Event.srcLastName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceTelephoneNumber',
        label: 'captions.Event.srcTelNo',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceEmail',
        label: 'captions.Event.srcEmail',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'sourceDescription',
        label: 'captions.Event.srcMediaDetails',
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'transregionalOutbrake',
        label: 'captions.Event.transregionalOutbreak',
        validation: ['required'],
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'typeOfPlace',
        newLine: true,
        label: 'captions.ActivityAsCase.typeOfPlace',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        label: 'captions.Facility.typeGroup',
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
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'Facility',
        label: 'captions.facility',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
  {
    id: 'address',
    title: 'captions.address',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'captions.country',
        key: 'country',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.region',
        key: 'region',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.district',
        key: 'district',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.community',
        key: 'community',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'street',
        label: 'captions.Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'captions.Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'captions.Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'captions.Facility.postalCode',
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.Facility.areaType',
        key: 'areaType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'headingGps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.latitude',
        key: 'latitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'captions.Location.longitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'accuracy',
        label: 'captions.Location.latLonAccuracy',
      },
    ],
  },
  {
    id: 'contact',
    title: 'captions.Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.details',
        key: '', // to-do
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.Event.responsibleUser',
        key: 'responsibleUser',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
];
