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
    dataKey: 'person.uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1/details',
      params: ['person.uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.firstName',
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'captions.lastName',
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: 'captions.sex',
    dataKey: 'person.sex',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.approximateAge',
    dataKey: 'person.ageAndBirthDate.age',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.involvementDescription',
    dataKey: 'involvementDescription',
    isSortable: true,
  },
  {
    name: 'captions.EventParticipant.caseUuid',
    dataKey: 'resultingCase.uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['resultingCase.uuid'],
      truncate: 6,
    },
  },
];
