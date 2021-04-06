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

import { EnumToKeyValuePipe } from '../../../shared/pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FollowUpStatusComponent } from '../follow-up-status/follow-up-status.component';
import { NewEpidNumberComponent } from '../new-epid-number/new-epid-number.component';

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
    title: 'Date of report',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'Case data',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        validation: [],
      },
    ],
  },
  {
    title: 'Case classification',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseClassification',
        validation: [],
        options: optionsCaseClassification,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'clinicalConfirmation',
        label: 'Clinical confirmation',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epidemiologicalConfirmation',
        label: 'Epidemiological confirmation',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratoryDiagnosticConfirmation',
        label: 'Lab diagnostic confirmation',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'classificationDate',
        label: 'Date of classification',
        newLine: true,
      },
      {
        ...FORM_DATA_NULL,
        key: 'classificationUser.caption',
        label: 'Classifying user',
      },
    ],
  },
  {
    title: 'Investigation status',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        validation: [],
        options: optionsInvestigationStatus,
      },
      {
        ...FORM_DATA_DATE,
        key: 'investigatedDate',
        label: 'Date of investigation',
        newLine: true,
        dependingOn: 'investigationStatus',
        dependingOnValues: ['DISCARDED', 'DONE'],
      },
    ],
  },
  {
    title: 'External data',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'External ID',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'External token',
      },
    ],
  },
  {
    title: 'Disease',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'Disease',
        validation: [],
        options: optionsDisese,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'Disease variant',
        options: optionsDisese,
      },
    ],
  },
  {
    title: 'Epid number',
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: NewEpidNumberComponent,
      },
    ],
  },
  {
    title: 'Outcome of case',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'outcome',
        validation: [],
        options: optionsCaseOutcome,
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDate',
        hint: 'Date of outcome',
        newLine: true,
        dependingOn: 'outcome',
        dependingOnValues: ['DECEASED', 'RECOVERED'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'sequelae',
        label: 'Sequelae',
        options: optionsYesNoUnknown,
        dependingOn: 'outcome',
        dependingOnValues: ['RECOVERED', 'UNKNOWN'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sequelaeDetails',
        label: 'Describe sequelae',
        newLine: true,
        className: 'size-full',
        dependingOn: 'sequelae',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: 'Source',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'reportingDistrict.uuid',
        label: 'Reporting district',
        options: [
          {
            key: 'default',
            value: 'Default district',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'caseIdentificationSource',
        label: 'Case identification source',
        options: optionsCaseIdentificationSource,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'screeningType',
        label: 'Screening',
        options: optionsScreeningType,
        dependingOn: 'caseIdentificationSource',
        dependingOnValues: ['SCREENING'],
      },
    ],
  },
  {
    title: 'Case origin',
    required: false,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'caseOrigin',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'Responsible region',
        validation: [],
        options: [
          {
            key: 'default',
            value: 'Default region',
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
        label: 'Responsible district',
        validation: [],
        options: [
          {
            key: 'default',
            value: 'Default district',
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
        label: 'Responsible community',
        options: [
          {
            key: 'default',
            value: 'Default community',
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
        label: 'Point of entry',
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
    title: 'Place of stay',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        validation: [],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'Facility category region',
        validation: [],
        options: [
          {
            key: 'default',
            value: 'Default region',
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
        label: 'Facility type',
        validation: [],
        options: [
          {
            key: 'LABORATORY',
            value: 'Laboratory',
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
        label: 'Facility name and description',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'Place description',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    title: 'Quarantine',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomePossible',
        label: 'Home base quarantine possible',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomePossibleComment',
        label: 'Comment',
        className: 'size-large',
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomeSupplyEnsured',
        label: 'Supply ensured?',
        options: optionsYesNoUnknown,
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomeSupplyEnsuredComment',
        label: 'Comment',
        className: 'size-large',
        dependingOn: 'quarantineHomeSupplyEnsured',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: 'Place of quarantine',
        options: optionsQuarantine,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineFrom',
        label: 'Quarantine period',
        hint: 'Start date',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        label: ' ',
        hint: 'End data',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedVerbally',
        label: 'Quarantine ordered verbally',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedVerballyDate',
        hint: 'Date of verbal order',
        dependingOn: 'quarantineOrderedVerbally',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedOfficialDocument',
        label: 'Quarantine ordered by official document',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedOfficialDocumentDate',
        hint: 'Date of document order',
        dependingOn: 'quarantineOrderedOfficialDocument',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOfficialOrderSent',
        label: 'Official quarantine order sent',
        dependingOn: 'quarantineOrderedOfficialDocument',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOfficialOrderSentDate',
        hint: 'Date order was sent',
        dependingOn: 'quarantineOfficialOrderSent',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'Help needed in quarantine',
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineTypeDetails',
        label: 'Quarantine details',
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    title: 'Report GPS',
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'reportLat',
        label: 'Report GPS latitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLon',
        label: 'Report GPS longitude',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLatLonAccuracy',
        label: 'Report GPS accuracy in m',
        newLine: true,
      },
    ],
  },
  {
    title: 'Donation',
    required: false,
    anchor: 'additional_information',
    anchorLabel: 'Additional information',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'bloodOrganOrTissueDonated',
        label: 'Blood/organ/tissue donation in the last 6 month',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: 'Infection',
    required: false,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'nosocomialOutbreak',
        label: 'Resulted from nosocomial outbreak',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionSetting',
        label: 'Infection setting',
        options: optionsInfectionSetting,
        dependingOn: 'nosocomialOutbreak',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'reInfection',
        label: 'Reinfection',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'previousInfectionDate',
        label: ' ',
        hint: 'Previous infection date',
        dependingOn: 'reInfection',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: 'Additional medical information',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'pregnant',
        label: 'Pregnancy',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'postpartum',
        label: 'Postpartum',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'trimester',
        label: 'Trimester',
        options: optionsTrimester,
        newLine: true,
        dependingOn: 'pregnant',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: 'Vaccination',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'vaccination',
        label: 'Vaccination status',
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_NUMBER,
        key: 'vaccinationDoses',
        label: 'Vaccination doses',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstVaccinationDate',
        hint: 'First vaccination',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastVaccinationDate',
        hint: 'Last vaccination',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'Source of vaccination',
        options: optionsVaccinationSource,
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: 'Vaccine name',
        options: optionsVaccineName,
        newLine: true,
        className: 'size-large',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: 'Manufacturer',
        options: optionsVaccineManufacturer,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: 'INN',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'Batch number',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineUniiCode',
        label: 'UNII code',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: 'ATC code',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
    ],
  },
  {
    title: 'Work',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'prohibitionToWork',
        label: 'Prohibition to work',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkFrom',
        label: ' ',
        hint: 'Prohibition to work from',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkUntil',
        label: ' ',
        hint: 'Prohibition to work until',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: 'Surveillance',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'surveillanceOfficer',
        label: 'Responsible surveillance officer',
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
        label: 'Name of responsable clinician',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianPhone',
        label: 'Phone of responsable clinician',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianEmail',
        label: 'Email address of responsable clinician',
        newLine: true,
        className: 'size-large',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'followup_status',
    anchorLabel: 'Follow-up status',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: FollowUpStatusComponent,
        className: 'size-large push-right',
      },
      {
        ...FORM_DATA_NULL,
        key: 'followUpStatus',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'overwriteFollowUpUntil',
        label: 'Overwrite follow-up until date',
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
        label: 'Follow up status comment',
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'paper_form',
    anchorLabel: 'Paper form',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'districtLevelDate',
        label: 'Date received at district level',
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'regionLevelDate',
        label: 'Date received at regional level',
        newLine: true,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'nationalLevelDate',
        label: 'Date received at national level',
        newLine: true,
        className: 'size-medium',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'general_comment',
    anchorLabel: 'General comment',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'Your comment here',
      },
    ],
  },
];
