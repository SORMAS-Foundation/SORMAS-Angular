import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  EventManagementStatusOptions,
  YesNoUnknown,
  FORM_DATA_CHECKBOX,
  EventInvestigationStatusOptions,
  EventStatusOptions,
  DiseaseTransmissionMode,
  InformationSource,
  InstitutionalPartnerType,
  TypeOfPlace,
  MeansOfTransport,
  RiskLevel,
  FORM_DATA_WIDGET,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const diseaseTransmissionMode = pipe.transform(DiseaseTransmissionMode);
const eventStatusOptions = pipe.transform(EventStatusOptions);
const eventManagementStatusOptions = pipe.transform(EventManagementStatusOptions);
const yesNoUnknown = pipe.transform(YesNoUnknown);
const investigationStatusOptions = pipe.transform(EventInvestigationStatusOptions);
const informationSourceOptions = pipe.transform(InformationSource);
const institutionalPartnerTypeOptions = pipe.transform(InstitutionalPartnerType);
const typeOfPlaceOptions = pipe.transform(TypeOfPlace);
const meansOfTransportOptions = pipe.transform(MeansOfTransport);
const riskLevelOptions = pipe.transform(RiskLevel);

export const FORM_DATA_EVENT_ADD = [
  {
    id: 'event',
    title: 'strings.entityEvent',
    anchor: 'event_data',
    anchorLabel: 'strings.entityEvent',
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
        options: riskLevelOptions,
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
        newLine: true,
        label: 'captions.description',
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'internalId',
        label: 'captions.Event.internalToken',
      },
    ],
  },
  {
    id: 'eventSuperordinateEvent',
    title: 'captions.eventSuperordinateEvent',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-superordinate-event',
        key: 'superordinateEvent',
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
        dependingOn: 'eventStatus',
        dependingOnValues: ['CLUSTER'],
        options: diseaseTransmissionMode,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'humanTransmission',
        label: 'captions.Event.humanTransmissionMode',
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMAN_TO_HUMAN'],
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
        newLine: true,
        dependingOn: 'eventStatus',
        dependingOnValues: ['CLUSTER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionPath',
        label: 'captions.Event.infectionPathCertainty',
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
        label: 'captions.Event.epidemiologicalEvidence',
        newLine: true,
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMAN_TO_HUMAN'],
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'study',
        label: 'enum.EpidemiologicalEvidenceDetail.STUDY',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'caseControlStudy',
        label: 'enum.EpidemiologicalEvidenceDetail.CASE_CONTROL_STUDY',
        dependingOn: 'study',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'cohortStudy',
        label: 'enum.EpidemiologicalEvidenceDetail.COHORT_STUDY',
        dependingOn: 'study',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'explorativeSurvey',
        label: 'enum.EpidemiologicalEvidenceDetail.EXPLORATIVE_SURVEY_OF_AFFECTED',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contactSickPerson',
        label: 'enum.EpidemiologicalEvidenceDetail.CONTACT_TO_SICK_PERSON',
        dependingOn: 'explorativeSurvey',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contactContaminatedMaterial',
        label: 'enum.EpidemiologicalEvidenceDetail.CONTACT_TO_CONTAMINATED_MATERIAL',
        dependingOn: 'explorativeSurvey',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'ascertainedData',
        label: 'enum.EpidemiologicalEvidenceDetail.DESCRIPTIVE_ANALYSIS_OF_ASCERTAINED_DATA',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'temporalOccurence',
        label: 'enum.EpidemiologicalEvidenceDetail.TEMPORAL_OCCURENCE',
        dependingOn: 'ascertainedData',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'spatialOccurence',
        label: 'enum.EpidemiologicalEvidenceDetail.SPACIAL_OCCURENCE',
        dependingOn: 'ascertainedData',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'directOccurence',
        label: 'enum.EpidemiologicalEvidenceDetail.DIRECT_OCCURENCE',
        dependingOn: 'ascertainedData',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'suspicion',
        label: 'enum.EpidemiologicalEvidenceDetail.SUSPICION',
        dependingOn: 'epidemiologicalEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'expressedByDiseased',
        label: 'enum.EpidemiologicalEvidenceDetail.EXPRESSED_BY_DISEASED',
        dependingOn: 'suspicion',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'expressedByHealthDepartment',
        label: 'enum.EpidemiologicalEvidenceDetail.EXPRESSED_BY_HEALTH_DEPARTMENT',
        dependingOn: 'suspicion',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'laboratoryDiagnosticEvidence',
        label: 'captions.Event.laboratoryDiagnosticEvidence',
        options: yesNoUnknown,
        dependingOn: 'primaryModeTransmission',
        dependingOnValues: ['HUMAN_TO_HUMAN'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'verificationAtLeastTwoInfected',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.VERIFICATION_OF_AT_LEAST_TWO_INFECTED',
        dependingOn: 'laboratoryDiagnosticEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'compliantPathogen',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.COMPLIANT_PATHOGEN_FINE_TYPING',
        dependingOn: 'verificationAtLeastTwoInfected',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'verificationMaterials',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.VERIFICATION_ON_MATERIALS',
        dependingOn: 'laboratoryDiagnosticEvidence',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'impressionTest',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.IMPRESSION_TEST',
        dependingOn: 'verificationMaterials',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'waterSample',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.WATER_SAMPLE',
        dependingOn: 'verificationMaterials',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'other',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.OTHER',
        dependingOn: 'verificationMaterials',
        className: 'sub-field',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pathogenFineTyping',
        label: 'enum.LaboratoryDiagnosticEvidenceDetail.PATHOGEN_FINE_TYPING_COMPLIANT_WITH_CASE',
        dependingOn: 'verificationMaterials',
        className: 'sub-field',
        newLine: true,
      },
    ],
  },
  {
    id: 'date',
    title: 'captions.date',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'multiDayEvent',
        label: 'captions.Event.multiDayEvent',
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'captions.Event.startDate',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'captions.Event.endDate',
        dependingOn: 'multiDayEvent',
      },
      {
        ...FORM_DATA_DATE,
        key: 'evolutionDate',
        label: 'captions.Event.evolutionDate',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'evolutionComment',
        label: 'captions.Event.evolutionComment',
        dependingOn: 'evolutionDate',
      },
    ],
  },
  {
    id: 'disease',
    title: 'captions.Event.diseaseShort',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'captions.Event.diseaseShort',
        key: 'disease',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Event.diseaseDetails',
        key: 'diseaseName',
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
        dependingOn: 'investigationStatus',
        dependingOnValues: ['ONGOING', 'DONE', 'DISCARDED'],
      },
      {
        ...FORM_DATA_DATE,
        label: 'captions.Event.eventInvestigationEndDate',
        key: 'endInvestigationDate',
        dependingOn: 'investigationStatus',
        dependingOnValues: ['ONGOING', 'DONE', 'DISCARDED'],
      },
    ],
  },
  {
    id: 'sourceInformation',
    title: 'captions.Event.informationSource',
    anchor: 'source',
    anchorLabel: 'captions.Event.informationSource',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'sourceType',
        label: 'captions.Event.srcType',
        options: informationSourceOptions,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcMediaWebsite',
        label: 'captions.Event.srcMediaWebsite',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcMediaName',
        label: 'captions.Event.srcMediaName',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'srcMediaDetails',
        label: 'captions.Event.srcMediaDetails',
        dependingOn: 'sourceType',
        dependingOnValues: ['MEDIANEWS'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'srcInstitutionalPartnerType',
        label: 'captions.Event.srcInstitutionalPartnerType',
        dependingOn: 'sourceType',
        dependingOnValues: ['INSTITUTIONALPARTNER'],
        options: institutionalPartnerTypeOptions,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcFirstName',
        label: 'captions.Event.srcFirstName',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcLastName',
        label: 'captions.Event.srcLastName',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcTelNo',
        label: 'captions.Event.srcTelNo',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'srcEmail',
        label: 'captions.Event.srcEmail',
        dependingOn: 'sourceType',
        dependingOnValues: ['HOTLINEPERSON', 'INSTITUTIONALPARTNER'],
      },
    ],
  },
  {
    id: 'outbrake',
    title: 'captions.Event.transregionalOutbreak',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'transregionalOutbrake',
        label: 'captions.Event.transregionalOutbreak',
        validation: ['required'],
        options: yesNoUnknown,
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    anchor: 'location',
    anchorLabel: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'typeOfPlace',
        newLine: true,
        label: 'captions.ActivityAsCase.typeOfPlace',
        options: typeOfPlaceOptions,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        label: 'captions.Facility.typeGroup',
        newLine: true,
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['FACILITY'],
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.facilityType',
        dependingOn: 'typeOfPlace',
        dependingOnValues: ['FACILITY'],
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        validation: ['required'],
        determinedBy: [
          {
            key: 'facilityCategory',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'captions.facility',
        dependingOn: 'typeOfPlace',
        fallbackOption: {
          fallbackOptionKey: 'OTHER_FACILITY',
          fallbackOptionValue: 'captions.Facility.OTHER_FACILITY',
        },
        dependingOnValues: ['FACILITY'],
        service: 'facilityService',
        determinedBy: [
          {
            key: 'facilityCategory',
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
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        validation: ['required'],
        dependingOn: 'facility',
        dependingOnValues: ['OTHER_FACILITY'],
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
    title: 'captions.address',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        label: 'captions.country',
        options: [],
        service: 'countryService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        options: [],
        service: 'regionService',
        determinedBy: [
          {
            key: 'country.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.district',
        options: [],
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.community',
        options: [],
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
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
        key: 'houseNumber',
        label: 'captions.Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'Facility.city',
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
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
        className: 'fullwidth',
        widgetInfo: {
          latitude: 'latitude',
          longitude: 'longitude',
          latLonAccuracy: 'accuracy',
        },
      },
    ],
  },
  {
    id: 'contact',
    anchor: 'contact',
    anchorLabel: 'captions.Contact',
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
