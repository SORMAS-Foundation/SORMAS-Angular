import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  FORM_DATA_NULL,
  FORM_DATA_NUMBER,
  FORM_DATA_WIDGET,
  CaseClassification,
  InvestigationStatus,
  CaseOutcome,
  Disease,
  YesNoUnknown,
  PlaceOfStay,
  Quarantine,
  VaccinationStatus,
  VaccinationSource,
  VaccineName,
  VaccineManufacturer,
  CaseIdentificationSource,
  ScreeningType,
  InfectionSetting,
  Trimester,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsCaseClassification = pipe.transform(CaseClassification);
const optionsCaseOutcome = pipe.transform(CaseOutcome);
const optionsInvestigationStatus = pipe.transform(InvestigationStatus);
const optionsDisese = pipe.transform(Disease);
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsQuarantine = pipe.transform(Quarantine);
const optionsVaccinationStatus = pipe.transform(VaccinationStatus);
const optionsVaccinationSource = pipe.transform(VaccinationSource);
const optionsVaccineName = pipe.transform(VaccineName);
const optionsVaccineManufacturer = pipe.transform(VaccineManufacturer);
const optionsCaseIdentificationSource = pipe.transform(CaseIdentificationSource);
const optionsScreeningType = pipe.transform(ScreeningType);
const optionsInfectionSetting = pipe.transform(InfectionSetting);
const optionsTrimester = pipe.transform(Trimester);

export const FORM_DATA_CASE_DETAILS = [
  {
    id: 'reportDate',
    title: 'captions.CaseData.reportDate',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'strings.headingCaseData',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'caseClassification',
    title: 'captions.CaseData.caseClassification',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseClassification',
        validation: ['required'],
        options: optionsCaseClassification,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'clinicalConfirmation',
        label: 'captions.CaseData.clinicalConfirmation',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epidemiologicalConfirmation',
        label: 'captions.CaseData.epidemiologicalConfirmation',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratoryDiagnosticConfirmation',
        label: 'captions.CaseData.laboratoryDiagnosticConfirmation',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'classificationDate',
        label: 'captions.CaseData.classificationDate',
        newLine: true,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_NULL,
        key: 'classificationUser.caption',
        label: 'captions.CaseData.classificationUser',
        dependingOn: 'classificationUser.caption',
      },
    ],
  },
  {
    id: 'investigationStatus',
    title: 'captions.CaseData.investigationStatus',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        validation: ['required'],
        options: optionsInvestigationStatus,
      },
      {
        ...FORM_DATA_DATE,
        key: 'investigatedDate',
        label: 'captions.CaseData.investigatedDate',
        newLine: true,
        dependingOn: 'investigationStatus',
        dependingOnValues: ['DISCARDED', 'DONE'],
      },
    ],
  },
  {
    id: 'externalData',
    title: 'CaseData.externalData',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.CaseData.externalID',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'captions.CaseData.externalToken',
      },
    ],
  },
  {
    id: 'disease',
    title: 'captions.disease',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        validation: ['required'],
        options: optionsDisese,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'captions.CaseData.diseaseVariant',
        options: optionsDisese,
      },
    ],
  },
  {
    id: 'epidNumber',
    title: 'captions.CaseData.epidNumber',
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-new-epid-number',
      },
    ],
  },
  {
    id: 'caseOutcome',
    title: 'captions.CaseData.outcome',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'outcome',
        validation: ['required'],
        options: optionsCaseOutcome,
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDate',
        hint: 'captions.CaseData.outcomeDate',
        newLine: true,
        dependingOn: 'outcome',
        dependingOnValues: ['DECEASED', 'RECOVERED'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'sequelae',
        label: 'captions.CaseData.sequelae',
        options: optionsYesNoUnknown,
        dependingOn: 'outcome',
        dependingOnValues: ['RECOVERED', 'UNKNOWN'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sequelaeDetails',
        label: 'captions.CaseData.sequelaeDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'sequelae',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'source',
    title: 'CaseData.source',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'reportingDistrict.uuid',
        label: 'captions.CaseData.reportingDistrict',
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'caseIdentificationSource',
        label: 'captions.CaseData.caseIdentificationSource',
        options: optionsCaseIdentificationSource,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'screeningType',
        label: 'captions.CaseData.screeningType',
        options: optionsScreeningType,
        dependingOn: 'caseIdentificationSource',
        dependingOnValues: ['SCREENING'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'captions.CaseData.caseOrigin',
    required: false,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'caseOrigin',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.CaseData.responsibleRegion',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.CaseData.responsibleDistrict',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.CaseData.responsibleCommunity',
        options: [
          {
            key: 'default',
            value: 'defaultCommunity',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'captions.CaseData.pointOfEntry',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['POINT_OF_ENTRY'],
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntryDetails',
        label: ' ',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['POINT_OF_ENTRY'],
      },
    ],
  },
  {
    id: 'placeOfStay',
    title: 'captions.casePlaceOfStay',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        validation: ['required'],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'captions.facilityTypeGroup',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.CaseData.facilityType',
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: 'FacilityType.LABORATORY',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'captions.CaseData.noneHealthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    id: 'quarantine',
    title: 'captions.CaseData.quarantine',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomePossible',
        label: 'captions.CaseData.quarantineHomePossible',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomePossibleComment',
        label: 'captions.CaseData.quarantineHomePossibleComment',
        className: 'size-large',
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomeSupplyEnsured',
        label: 'captions.CaseData.quarantineHomeSupplyEnsured',
        options: optionsYesNoUnknown,
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomeSupplyEnsuredComment',
        label: 'captions.CaseData.quarantineHomePossibleComment',
        className: 'size-large',
        dependingOn: 'quarantineHomeSupplyEnsured',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: 'CaseData.placeOfQuarantine',
        options: optionsQuarantine,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineFrom',
        label: 'CaseData.quarantinePeriod',
        hint: 'captions.CaseData.quarantineFrom',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        label: ' ',
        hint: 'captions.CaseData.quarantineTo',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedVerbally',
        label: 'captions.CaseData.quarantineOrderedVerbally',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedVerballyDate',
        hint: 'captions.CaseData.quarantineOrderedVerballyDate',
        dependingOn: 'quarantineOrderedVerbally',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedOfficialDocument',
        label: 'captions.CaseData.quarantineOrderedOfficialDocument',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedOfficialDocumentDate',
        hint: 'captions.CaseData.quarantineOrderedOfficialDocumentDate',
        dependingOn: 'quarantineOrderedOfficialDocument',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOfficialOrderSent',
        label: 'captions.CaseData.quarantineOfficialOrderSent',
        dependingOn: 'quarantineOrderedOfficialDocument',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOfficialOrderSentDate',
        hint: 'captions.CaseData.quarantineOfficialOrderSentDate',
        dependingOn: 'quarantineOfficialOrderSent',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'captions.CaseData.quarantineHelpNeeded',
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineTypeDetails',
        label: 'captions.CaseData.quarantineTypeDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    id: 'reportGPS',
    title: 'CaseData.reportGPS',
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'reportLat',
        label: 'captions.CaseData.reportLat',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLon',
        label: 'captions.CaseData.reportLon',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLatLonAccuracy',
        label: 'captions.CaseData.reportLatLonAccuracy',
        newLine: true,
      },
    ],
  },
  {
    id: 'donation',
    title: 'CaseData.donation',
    required: false,
    anchor: 'additional_information',
    anchorLabel: 'CaseData.additionalInfo',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'bloodOrganOrTissueDonated',
        label: 'captions.CaseData.bloodOrganOrTissueDonated',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'infection',
    title: 'CaseData.infection',
    required: false,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'nosocomialOutbreak',
        label: 'captions.CaseData.nosocomialOutbreak',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionSetting',
        label: 'captions.CaseData.infectionSetting',
        options: optionsInfectionSetting,
        dependingOn: 'nosocomialOutbreak',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'reInfection',
        label: 'captions.CaseData.reInfection',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'previousInfectionDate',
        label: ' ',
        hint: 'captions.CaseData.previousInfectionDate',
        dependingOn: 'reInfection',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'medicalInformation',
    title: 'strings.headingMedicalInformation',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'pregnant',
        label: 'captions.CaseData.pregnant',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'postpartum',
        label: 'captions.CaseData.postpartum',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'trimester',
        label: 'captions.CaseData.trimester',
        options: optionsTrimester,
        newLine: true,
        dependingOn: 'pregnant',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'vaccination',
    title: 'headingVaccination',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'vaccination',
        label: 'captions.CaseData.vaccination',
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_NUMBER,
        key: 'vaccinationDoses',
        label: 'captions.CaseData.vaccinationDoses',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstVaccinationDate',
        hint: 'captions.CaseData.firstVaccinationDate',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'CaseData.lastVaccinationDate',
        hint: 'captions.CaseData.lastVaccinationDate',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'captions.CaseData.vaccinationInfoSource',
        options: optionsVaccinationSource,
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: 'captions.CaseData.vaccineName',
        options: optionsVaccineName,
        newLine: true,
        className: 'size-large',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: 'captions.CaseData.vaccineManufacturer',
        options: optionsVaccineManufacturer,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: 'captions.CaseData.vaccineInn',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'captions.CaseData.vaccineBatchNumber',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineUniiCode',
        label: 'captions.CaseData.vaccineUniiCode',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: 'captions.CaseData.vaccineAtcCode',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
    ],
  },
  {
    id: 'work',
    title: 'CaseData.work',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'prohibitionToWork',
        label: 'captions.CaseData.prohibitionToWork',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkFrom',
        label: ' ',
        hint: 'captions.CaseData.prohibitionToWorkFrom',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkUntil',
        label: ' ',
        hint: 'captions.CaseData.prohibitionToWorkUntil',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'surveillance',
    title: 'CaseData.surveillance',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'surveillanceOfficer',
        label: 'captions.CaseData.surveillanceOfficer',
        options: [
          {
            key: 'default',
            value: 'Default',
          },
        ],
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianName',
        label: 'captions.CaseData.clinicianName',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianPhone',
        label: 'captions.CaseData.clinicianPhone',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianEmail',
        label: 'captions.CaseData.clinicianEmail',
        newLine: true,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'followupStatus',
    title: '',
    required: false,
    anchor: 'followup_status',
    anchorLabel: 'captions.CaseData.followUpStatus',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-follow-up-status',
        className: 'push-right',
      },
      {
        ...FORM_DATA_NULL,
        key: 'followUpStatus',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'overwriteFollowUpUntil',
        label: 'captions.CaseData.overwriteFollowUpUntil',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntil',
        dependingOn: 'overwriteFollowUpUntil',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'followUpComment',
        label: 'captions.CaseData.followUpComment',
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    id: 'paperForm',
    title: '',
    required: false,
    anchor: 'paper_form',
    anchorLabel: 'CaseData.paperForm',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'districtLevelDate',
        label: 'captions.CaseData.districtLevelDate',
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'regionLevelDate',
        label: 'captions.CaseData.regionLevelDate',
        newLine: true,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'nationalLevelDate',
        label: 'captions.CaseData.nationalLevelDate',
        newLine: true,
        className: 'size-medium',
      },
    ],
  },
  {
    id: 'comment',
    title: '',
    required: false,
    anchor: 'general_comment',
    anchorLabel: 'captions.CaseData.additionalDetails',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'CaseData.yourCommentHere',
      },
    ],
  },
];
