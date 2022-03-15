import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/contacts/contact/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Contact.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.Contact.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'captions.Contact.internalToken',
    dataKey: 'internalToken',
    isSortable: true,
  },
  {
    name: 'captions.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactClassification',
    dataKey: 'contactClassification',
    translationName: 'ContactClassification',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactStatus',
    dataKey: 'contactStatus',
    translationName: 'ContactStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactCategory',
    dataKey: 'contactCategory',
    isSortable: true,
    className: 'contact-category',
    translationName: 'ContactCategory',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="contact-category-$param1">$param1</span>',
      params: ['contactCategory'],
    },
  },
  {
    name: 'captions.Contact.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'captions.Person.sex',
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: 'captions.Person.approximateAge',
    dataKey: 'approximateAge',
    isSortable: true,
  },
  {
    name: 'captions.Person.districtName',
    dataKey: 'districtName',
    isSortable: true,
  },
  {
    name: 'captions.address',
    dataKey: 'city',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: ['city', 'street', 'houseNumber', 'postalCode'],
    },
  },
  {
    name: 'captions.PersonContactDetail.additionalInformation',
    dataKey: 'additionalInformation',
    isSortable: true,
  },
  {
    name: 'captions.Person.phone',
    dataKey: 'phone',
    isSortable: true,
  },
  {
    name: 'captions.Contact.latestEventId',
    dataKey: 'latestEventId',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/details',
      params: ['latestEventId'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Contact.contactProximity',
    dataKey: 'contactProximity',
    translationName: 'ContactProximity',
    isSortable: true,
  },
  {
    name: 'captions.Contact.relationToCase',
    dataKey: 'relationToCase',
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpStatus',
    dataKey: 'followUpStatus',
    translationName: 'FollowupStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
  },
  {
    name: 'captions.Contact.symptomJournalStatus',
    dataKey: 'symptomJournalStatus',
    translationName: 'SymptomJournalStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.vaccinationStatus',
    dataKey: 'vaccinationStatus',
    translationName: 'VaccinationStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.numberOfVisits',
    dataKey: 'visitCount',
    isSortable: true,
  },
  {
    name: 'captions.columnNumberOfPendingTasks',
    dataKey: '', // toDo
    isSortable: true,
  },
  {
    name: 'strings.headingCompleteness',
    dataKey: 'completeness',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1%',
      params: ['completeness'],
      match: {
        'value-low': [-0.01, 25.01],
        'value-medium': [25, 50.01],
        'value-normal': [50, 75.01],
        'value-high': [75, 100.01],
      },
    },
  },
  {
    name: 'captions.Contact.caze',
    dataKey: 'caze.caption',
    isSortable: true,
  },
  {
    name: 'captions.Contact.reportingUser',
    dataKey: 'reportingUser',
    isSortable: true,
  },
];

export const legendDefs = undefined;
