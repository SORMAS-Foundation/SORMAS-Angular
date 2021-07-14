import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  EventManagementStatusOptions,
  YesNoUnknown,
  FORM_DATA_CHECKBOX,
  InvestigationStatusOptions,
  EventStatusOptionsEdit,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const eventStatusOptionsEdit = pipe.transform(EventStatusOptionsEdit);
const eventManagementStatusOptions = pipe.transform(EventManagementStatusOptions);
const yesNoUnknown = pipe.transform(YesNoUnknown);
const investigationStatusOptions = pipe.transform(InvestigationStatusOptions);

export const FORM_DATA_EVENT_ADD = [
  {
    id: 'eventData',
    title: 'headingEventData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'Event.reportDateTime',
        key: 'reportDate',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'internalId',
        label: 'Event.internalId',
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
        label: 'Event.externalId',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'Event.externalToken',
      },
    ],
  },
  {
    id: 'event',
    title: 'entityEvent',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'eventStatus',
        label: 'EventAction.eventStatus',
        validation: ['required'],
        options: eventStatusOptionsEdit,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'riskLevel',
        label: 'Event.riskLevel',
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
        label: 'Event.eventManagementStatus',
        newLine: true,
        validation: ['required'],
        options: eventManagementStatusOptions,
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'title',
        label: 'Event.eventTitle',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'description',
      },
    ],
  },
  {
    id: 'date',
    title: 'date',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'Event.start',
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'Event.end',
      },
      {
        ...FORM_DATA_DATE,
        key: 'clusterEvolutionDate',
        label: 'Event.clusterEvolutionDate',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'natureClusterEvolution',
        label: 'Event.natureClusterEvolution',
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
    title: 'Transmission',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'primaryModeTransmission',
        label: 'Event.diseaseTransmissionMode',
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
        label: 'Event.humanTransmissionMode',
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
        label: 'Event.parenteralTransmissionMode',
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
        label: 'Event.medicallyAssociatedTransmissionMode',
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
        label: 'Event.nosocomial',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionPath',
        newLine: true,
        label: 'Event.infectionPathCertainty',
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
        label: 'Event.epidemiologicalEvidence',
        newLine: true,
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'study',
        label: 'EpidemiologicalEvidenceDetail.STUDY',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'explorativeSurvey',
        label: 'EpidemiologicalEvidenceDetail.EXPLORATIVE_SURVEY_OF_AFFECTED',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'ascertainedData',
        label: 'EpidemiologicalEvidenceDetail.DESCRIPTIVE_ANALYSIS_OF_ASCERTAINED_DATA',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'suspicion',
        label: 'EpidemiologicalEvidenceDetail.SUSPICION',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'laboratoryDiagnosticEvidence',
        label: 'Event.laboratoryDiagnosticEvidence',
        options: yesNoUnknown,
        newLine: true,
      },
    ],
  },
  {
    id: 'investigation',
    title: 'Investigation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        label: 'Event.eventInvestigationStatus',
        options: investigationStatusOptions,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'Event.eventInvestigationStartDate',
        newLine: true,
        key: 'startInvestigationDate',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'Event.eventInvestigationEndDate',
        key: 'endInvestigationDate',
      },
    ],
  },
  {
    id: 'sourceInformation',
    title: 'Event.informationSource',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'sourceType',
        label: 'Event.srcType',
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
        label: 'Event.srcInstitutionalPartnerType',
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
        label: 'Event.sourceFirstName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceLastName',
        label: 'Event.sourceLastName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceTelephoneNumber',
        label: 'Event.sourceTelephoneNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceEmail',
        label: 'Event.sourceEmail',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'sourceDescription',
        label: 'Event.sourceDetails',
      },
    ],
  },
  {
    id: 'location',
    title: 'Location',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'transregionalOutbrake',
        label: 'Event.transregionalOutbreak',
        validation: ['required'],
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'typeOfPlace',
        newLine: true,
        label: 'ActivityAsCase.typeOfPlace',
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
        label: 'Facility.typeGroup',
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
        label: 'facilityType',
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
        label: 'facility',
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
    title: 'address',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'country',
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
        label: 'region',
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
        label: 'district',
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
        label: 'community',
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
        label: 'Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'Facility.postalCode',
      },
      {
        ...FORM_DATA_SELECT,
        label: 'Facility.areaType',
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
        label: 'Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'Gps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'Gps.latitude',
        key: 'latitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'Gps.longitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'accuracy',
        label: 'Gps.accuracy',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'Location.details',
        key: 'Community contact person',
      },
      {
        ...FORM_DATA_SELECT,
        label: 'Event.responsibleUser',
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
