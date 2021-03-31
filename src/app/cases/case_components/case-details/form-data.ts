import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
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
  FORM_DATA_NULL,
  FORM_DATA_NUMBER,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../shared/pipes/enum-to-key-value/enum-to-key-value.pipe';

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
        validation: ['required'],
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
        validation: ['required'],
        options: optionsCaseClassification,
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
        validation: ['required'],
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
    title: 'Disease',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        validation: ['required'],
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
    ],
  },
  {
    title: 'Outcome of case',
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
        hint: 'Date of outcome',
        newLine: true,
        dependingOn: 'outcome',
        dependingOnValues: ['DECEASED', 'RECOVERED'],
      },
    ],
  },
  {
    title: 'Sequelae',
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'sequelae',
        options: optionsYesNoUnknown,
        dependingOn: 'outcome',
        dependingOnValues: ['RECOVERED', 'UNKNOWN'],
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
    title: 'Case origin',
    required: false,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'caseOrigin',
        className: 'size-medium origin-country',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'Responsible region',
        validation: ['required'],
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
        validation: ['required'],
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
        validation: ['required'],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'Facility category region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'Default region',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'Facility type',
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: 'Laboratory',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'Facility name and description',
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    title: 'Quarantine',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: 'Place of quarantine',
        options: optionsQuarantine,
      },
      {
        ...FORM_DATA_DATE,
        key: '  quarantineFrom',
        label: 'Quarantine period',
        hint: 'Start date',
        newLine: true,
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: '  quarantineTo',
        label: ' ',
        hint: 'End data',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
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
    title: 'Vaccination',
    required: false,
    anchor: 'additional_information',
    anchorLabel: 'Additional information',
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
        newLine: true,
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
        ...FORM_DATA_CHECKBOX,
        key: 'overwriteFollowUpUntil',
        label: 'Overwrite follow-up until date',
        value: 'YES',
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
