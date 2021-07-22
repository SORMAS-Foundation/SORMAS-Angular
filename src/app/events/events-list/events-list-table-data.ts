import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Event.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Event.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'captions.Event.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventStatus',
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: 'captions.Event.riskLevel',
    dataKey: 'riskLevel',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="risk-level-$param1">$param1</span>',
      params: ['riskLevel'],
    },
  },
  {
    name: 'captions.Event.eventInvestigationStatus',
    dataKey: 'eventInvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: 'captions.Event.eventManagementStatus',
    dataKey: 'eventManagementStatus',
    isSortable: true,
  },
  {
    name: 'captions.EventActionExport.eventDate',
    dataKey: 'startDate',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
  },
  {
    name: 'captions.Event.evolutionDate',
    dataKey: 'evolutionDate',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy',
    },
  },
  {
    name: 'captions.Event.diseaseShort',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventGroups',
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
  },
  {
    name: 'captions.region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'captions.district',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.community',
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: 'captions.address',
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: 'captions.Event.srcType',
    dataKey: 'srcType',
    isSortable: true,
  },
  {
    name: 'captions.Event.informationSource',
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: 'captions.Event.reportDateTime',
    dataKey: 'reportDateTime',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: 'd/M/yyyy h:mm aa',
    },
  },
  {
    name: 'captions.Event.reportingUser',
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.Event.responsibleUser',
    dataKey: 'responsibleUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.Event.numberOfPendingTasks',
    dataKey: 'contactCountSourceInEvent',
    isSortable: true,
  },
  {
    name: 'captions.Event.participantCount',
    dataKey: 'participantCount',
    isSortable: true,
  },
  {
    name: 'captions.Event.caseCount',
    dataKey: 'caseCount',
    isSortable: true,
  },
  {
    name: 'captions.Event.deathCount',
    dataKey: 'deathCount',
    isSortable: true,
  },
  {
    name: 'captions.Event.contactCount',
    dataKey: 'contactCount',
    isSortable: true,
  },
];
