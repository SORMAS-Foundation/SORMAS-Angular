import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDetailedDefs: TableColumn[] = [
  {
    name: 'captions.CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.CaseData.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.diseaseVariant',
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: 'captions.Contact.caze.caseClassification',
    dataKey: 'caseClassification',
    translationName: 'CaseClassification',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.outcome',
    dataKey: 'outcome',
    translationName: 'CaseOutcome',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.reInfection',
    dataKey: 'reInfection',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.investigationStatus',
    dataKey: 'investigationStatus',
    translationName: 'InvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: 'captions.CaseData.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.sex',
    dataKey: 'person.sex',
    isSortable: true,
  },
  {
    name: 'captions.Person.ageAndBirthDate',
    dataKey: 'age',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: ['person.age', 'person.birthdateDD', 'person.birthdateMM', 'person.birthdateYYYY'],
    },
  },
  {
    name: 'captions.Location.postalCode',
    dataKey: 'postalCode',
    isSortable: true,
  },
  {
    name: 'captions.Location.postalCode',
    dataKey: 'postalCode',
    isSortable: true,
  },
  {
    name: 'captions.city',
    dataKey: 'city',
    isSortable: true,
  },
  {
    name: 'captions.Location.street',
    dataKey: 'street',
    isSortable: true,
  },
  {
    name: 'captions.Location.houseNumber',
    dataKey: 'houseNumber',
    isSortable: true,
  },
  {
    name: 'captions.Location.additionalInformation',
    dataKey: 'additionalInformation',
    isSortable: true,
  },
  {
    name: 'captions.Person.phone',
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.eventCount',
    dataKey: 'eventCount',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.latestEventId',
    dataKey: 'latestEventId',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.latestEventStatus',
    dataKey: 'latestEventStatus',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.latestEventTitle',
    dataKey: 'latestEventTitle',
    isSortable: true,
  },
  {
    name: 'captions.Symptoms.onsetDate',
    dataKey: 'symptomOnsetDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.latestSampleDateTime',
    dataKey: 'latestSampleDateTime',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.responsibleDistrict',
    dataKey: 'responsibleDistrict',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.responsibleRegion',
    dataKey: 'responsibleRegion',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.responsibleCommunity',
    dataKey: 'responsibleCommunity',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.healthFacilityName',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.pointOfEntry',
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.reportDate',
    dataKey: 'reportDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.quarantineTo',
    dataKey: 'quarantineTo',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.followUpStatus',
    dataKey: 'followUpStatus',
    translationName: 'FollowupStatus',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.followUpStatus',
    dataKey: 'followUpStatus',
    translationName: 'FollowupStatus',
    isSortable: true,
  },
  {
    name: 'captions.reportingUser',
    dataKey: 'reportingUser',
    isSortable: true,
  },
];
