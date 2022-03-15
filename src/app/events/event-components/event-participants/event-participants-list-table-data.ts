import { COMMON_DATE_FORMAT } from '../../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.EventParticipant.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/participants-profile/$param2',
      params: ['eventUuid', 'uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.EventParticipant.personUuid',
    dataKey: 'personUuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1',
      params: ['personUuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'captions.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.sex',
    dataKey: 'sex',
    translationName: 'Sex',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.approximateAge',
    dataKey: 'approximateAge',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.involvementDescription',
    dataKey: 'involvementDescription',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.caseUuid',
    dataKey: 'caseUuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['caseUuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.EventParticipant.contactCount',
    dataKey: 'contactCount',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Sample.pathogenTestResult',
    dataKey: 'pathogenTestResult',
    translationName: 'PathogenTestResultType',
    alternateData: 'captions.notTestedYet',
    isSortable: true,
  },
  {
    name: 'captions.Sample.sampleDateTime',
    dataKey: 'sampleDateTime',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.EventParticipant.vaccinationStatus',
    dataKey: 'vaccinationStatus',
    isSortable: true,
  },
];
