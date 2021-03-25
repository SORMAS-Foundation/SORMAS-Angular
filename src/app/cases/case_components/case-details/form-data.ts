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
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../shared/pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsCaseClassification = pipe.transform(CaseClassification);
const optionsCaseOutcome = pipe.transform(CaseOutcome);
const optionsInvestigationStatus = pipe.transform(InvestigationStatus);
const optionsDisese = pipe.transform(Disease);
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);

export const FORM_DATA_CASE_DETAILS = [
  {
    title: 'Date of report',
    required: true,
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
        toggleExpression: '!!outcome',
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
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sequelaeDetails',
        label: 'Describe sequelae',
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    title: 'Case origin',
    required: false,
    fields: [
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
        className: 'size-large',
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
        options: [
          {
            key: 'HOME',
            value: 'Home',
          },
        ],
      },
      {
        ...FORM_DATA_DATE,
        key: '  quarantineFrom',
        label: 'Quarantine period',
        hint: 'Start date',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: '  quarantineTo',
        label: ' ',
        hint: 'End data',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'Help needed in quarantine',
        newLine: true,
        className: 'size-full',
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
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'vaccination',
        label: 'Vaccination status',
        options: [
          {
            key: 'VACCINATED',
            value: 'Vaccinated',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationDoses',
        label: 'Vaccination doses',
        options: [
          {
            key: '1',
            value: '1',
          },
        ],
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstVaccinationDate',
        hint: 'First vaccination',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastVaccinationDate',
        hint: 'Last vaccination',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'Source of vaccination',
        options: [
          {
            key: 'ORAL',
            value: 'Oral',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: 'Vaccine name',
        options: [
          {
            key: 'bla',
            value: 'Bla bla',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: 'Manufacturer',
        options: [
          {
            key: 'bla',
            value: 'Bla bla',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: 'INN',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'Batch number',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineUniiCode',
        label: 'UNII code',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: 'ATC code',
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
            key: 'bla',
            value: 'Bla bla',
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
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'districtLevelDate',
        label: 'Date received at district level',
      },
      {
        ...FORM_DATA_DATE,
        key: 'regionLevelDate',
        label: 'Date received at regional level',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'nationalLevelDate',
        label: 'Date received at national level',
        newLine: true,
      },
    ],
  },
  {
    title: '',
    required: false,
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'Your comment here',
      },
    ],
  },
];
