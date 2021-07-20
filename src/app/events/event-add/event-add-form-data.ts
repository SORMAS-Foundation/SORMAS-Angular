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
  DiseaseTransmissionMode,
  InformationSource,
  InstitutionalPartnerType,
  TypeOfPlace,
  MeansOfTransport,
  RiskLevel,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const diseaseTransmissionMode = pipe.transform(DiseaseTransmissionMode);
const eventStatusOptionsEdit = pipe.transform(EventStatusOptionsEdit);
const eventManagementStatusOptions = pipe.transform(EventManagementStatusOptions);
const yesNoUnknown = pipe.transform(YesNoUnknown);
const investigationStatusOptions = pipe.transform(InvestigationStatusOptions);
const informationSourceOptions = pipe.transform(InformationSource);
const institutionalPartnerTypeOptions = pipe.transform(InstitutionalPartnerType);
const typeOfPlaceOptions = pipe.transform(TypeOfPlace);
const meansOfTransportOptions = pipe.transform(MeansOfTransport);
const riskLevelOptions = pipe.transform(RiskLevel);

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
        options: riskLevelOptions,
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
        ...FORM_DATA_CHECKBOX,
        key: 'multiDayEvent',
        label: 'Event.multiDayEvent',
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'Event.startDate',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        dependingOn: 'multiDayEvent',
        label: 'Event.endDate',
      },
      {
        ...FORM_DATA_DATE,
        key: 'evolutionDate',
        label: 'Event.evolutionDate',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'evolutionComment',
        label: 'Event.evolutionComment',
        dependingOn: 'evolutionDate',
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
        dependingOn: 'eventStatus',
        dependingOnValues: ['CLUSTER'],
        options: diseaseTransmissionMode,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'humanTransmission',
        newLine: true,
        label: 'Event.humanTransmissionMode',
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMANTOHUMAN'],
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
        newLine: true,
        dependingOn: 'eventStatus',
        dependingOnValues: ['CLUSTER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionPath',
        label: 'Event.infectionPathCertainty',
        dependingOn: 'nosocomial',
        dependingOnValues: ['YES'],
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
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMANTOHUMAN'],
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'study',
        label: 'EpidemiologicalEvidenceDetail.STUDY',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'caseControlStudy',
        label: 'EpidemiologicalEvidenceDetail.CASE_CONTROL_STUDY',
        dependingOn: 'study',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'cohortStudy',
        label: 'EpidemiologicalEvidenceDetail.COHORT_STUDY',
        dependingOn: 'study',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'explorativeSurvey',
        label: 'EpidemiologicalEvidenceDetail.EXPLORATIVE_SURVEY_OF_AFFECTED',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contactSickPerson',
        label: 'EpidemiologicalEvidenceDetail.CONTACT_TO_SICK_PERSON',
        dependingOn: 'explorativeSurvey',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contactContaminatedMaterial',
        label: 'EpidemiologicalEvidenceDetail.CONTACT_TO_CONTAMINATED_MATERIAL',
        dependingOn: 'explorativeSurvey',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'ascertainedData',
        label: 'EpidemiologicalEvidenceDetail.DESCRIPTIVE_ANALYSIS_OF_ASCERTAINED_DATA',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'temporalOccurence',
        label: 'EpidemiologicalEvidenceDetail.TEMPORAL_OCCURENCE',
        dependingOn: 'ascertainedData',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'spatialOccurence',
        label: 'EpidemiologicalEvidenceDetail.SPACIAL_OCCURENCE',
        dependingOn: 'ascertainedData',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'directOccurence',
        label: 'EpidemiologicalEvidenceDetail.DIRECT_OCCURENCE',
        dependingOn: 'ascertainedData',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'suspicion',
        label: 'EpidemiologicalEvidenceDetail.SUSPICION',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'expressedByDiseased',
        label: 'EpidemiologicalEvidenceDetail.EXPRESSED_BY_DISEASED',
        dependingOn: 'suspicion',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'expressedByHealthDepartment',
        label: 'EpidemiologicalEvidenceDetail.EXPRESSED_BY_HEALTH_DEPARTMENT',
        dependingOn: 'suspicion',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'laboratoryDiagnosticEvidence',
        label: 'Event.laboratoryDiagnosticEvidence',
        options: yesNoUnknown,
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMANTOHUMAN'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'verificationAtLeastTwoInfected',
        label: 'LaboratoryDiagnosticEvidenceDetail.VERIFICATION_OF_AT_LEAST_TWO_INFECTED',
        dependingOn: 'laboratoryDiagnosticEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'compliantPathogen',
        label: 'LaboratoryDiagnosticEvidenceDetail.COMPLIANT_PATHOGEN_FINE_TYPING',
        dependingOn: 'verificationAtLeastTwoInfected',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'verificationMaterials',
        label: 'LaboratoryDiagnosticEvidenceDetail.VERIFICATION_ON_MATERIALS',
        dependingOn: 'laboratoryDiagnosticEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'impressionTest',
        label: 'LaboratoryDiagnosticEvidenceDetail.IMPRESSION_TEST',
        dependingOn: 'verificationMaterials',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'waterSample',
        label: 'LaboratoryDiagnosticEvidenceDetail.WATER_SAMPLE',
        dependingOn: 'verificationMaterials',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'other',
        label: 'LaboratoryDiagnosticEvidenceDetail.OTHER',
        dependingOn: 'verificationMaterials',
        subField: true,
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pathogenFineTyping',
        label: 'LaboratoryDiagnosticEvidenceDetail.PATHOGEN_FINE_TYPING_COMPLIANT_WITH_CASE',
        dependingOn: 'verificationMaterials',
        subField: true,
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
        dependingOn: 'investigationStatus',
        dependingOnValues: ['ONGOING', 'DONE', 'DISCARDED'],
      },
      {
        ...FORM_DATA_DATE,
        label: 'Event.eventInvestigationEndDate',
        key: 'endInvestigationDate',
        dependingOn: 'investigationStatus',
        dependingOnValues: ['ONGOING', 'DONE', 'DISCARDED'],
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
        options: informationSourceOptions,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcMediaWebsite',
        label: 'Event.srcMediaWebsite',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcMediaName',
        label: 'Event.srcMediaName',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'srcMediaDetails',
        label: 'Event.srcMediaDetails',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'srcInstitutionalPartnerType',
        newLine: true,
        label: 'Event.srcInstitutionalPartnerType',
        dependingOn: 'sourceType',
        dependingOnValues: ['INSTITUTIONALPARTNER'],
        options: institutionalPartnerTypeOptions,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcFirstName',
        label: 'Event.srcFirstName',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcLastName',
        label: 'Event.srcLastName',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcTelNo',
        label: 'Event.srcTelNo',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcEmail',
        label: 'Event.srcEmail',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
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
        options: typeOfPlaceOptions,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        label: 'Facility.typeGroup',
        newLine: true,
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['FACILITY'],
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
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['FACILITY'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'facility',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['FACILITY'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'typeOfPlaceText',
        label: 'Event.typeOfPlaceText',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['OTHER'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'meansOfTransport',
        label: 'TypeOfPlace.MEANS_OF_TRANSPORT',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['MEANSOFTRANSPORT'],
        options: meansOfTransportOptions,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'connectionNumber',
        label: 'Event.connectionNumber',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['MEANSOFTRANSPORT'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'travelDate',
        label: 'Event.travelDate',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['MEANSOFTRANSPORT'],
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
        key: 'houseNumber',
        label: 'Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'Facility.additionalInformation',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'Facility.city',
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
    ],
  },
  {
    id: 'gps',
    title: 'Gps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'Location.latitude',
        key: 'latitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'Location.longitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'accuracy',
        label: 'Location.latLonAccuracy',
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
