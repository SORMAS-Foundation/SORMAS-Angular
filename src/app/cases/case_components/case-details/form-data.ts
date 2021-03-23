import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
} from '../../../app.constants';

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
        options: [
          {
            key: '',
            value: 'No outcome yet',
          },
          {
            key: 'deceased',
            value: 'Deceased',
          },
          {
            key: 'recovered',
            value: 'Recovered',
          },
          {
            key: 'unknown',
            value: 'Unknown',
          },
        ],
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
        options: [
          {
            key: 'PENDING',
            value: 'Investigation pending',
          },
          {
            key: 'DONE',
            value: 'Investigation done',
          },
          {
            key: 'DISCARDED',
            value: 'Investigation discarded',
          },
        ],
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
        options: [
          {
            key: 'solid',
            value: 'Solid',
          },
          {
            key: 'great',
            value: 'Great',
          },
          {
            key: 'good',
            value: 'Good',
          },
          {
            key: 'unproven',
            value: 'Unproven',
          },
        ],
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
        options: [
          {
            key: '',
            value: 'No outcome yet',
          },
          {
            key: 'deceased',
            value: 'Deceased',
          },
          {
            key: 'recovered',
            value: 'Recovered',
          },
          {
            key: 'unknown',
            value: 'Unknown',
          },
        ],
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDate',
        label: 'Date of outcome',
        newLine: true,
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
        options: [
          {
            key: 'Yes',
            value: 'Yes',
          },
          {
            key: 'No',
            value: 'No',
          },
          {
            key: 'Unknown',
            value: 'Unknown',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sequelaeDetails',
        label: 'Describe sequelae',
        newLine: true,
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
      },
    ],
  },
  {
    title: 'Place of stay',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'healthFacility.uuid',
        validation: ['required'],
        options: [
          {
            key: 'FACILITY',
            value: 'Facility',
          },
          {
            key: 'HOME',
            value: 'Home',
          },
        ],
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
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'Facility name and description',
        newLine: true,
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
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: '  quarantineTo',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'Help needed in quarantine',
        newLine: true,
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
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastVaccinationDate',
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
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianName',
        label: 'Name of responsable clinician',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianPhone',
        label: 'Phone of responsable clinician',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianEmail',
        label: 'Email address of responsable clinician',
        newLine: true,
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
