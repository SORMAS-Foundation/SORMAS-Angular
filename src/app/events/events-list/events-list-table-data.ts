import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Event.uuid',
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: 'Event.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'Event.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'EventAction.eventStatus',
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: 'Event.riskLevel',
    dataKey: 'riskLevel',
    isSortable: true,
    stylify: true,
  },
  {
    name: 'Event.eventInvestigationStatus',
    dataKey: 'eventInvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: 'Event.eventManagementStatus',
    dataKey: 'eventManagementStatus',
    isSortable: true,
  },
  {
    name: 'EventActionExport.eventDate',
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: 'Event.evolutionDate',
    dataKey: 'evolutionDate',
    isSortable: true,
  },
  {
    name: 'Event.diseaseShort',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'Event.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: 'Event.eventGroups',
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
  },
  {
    name: 'region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'district',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'community',
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: 'address',
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: 'Event.srcType',
    dataKey: 'srcType',
    isSortable: true,
  },
  {
    name: 'Event.informationSource',
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: 'Event.reportDateTime',
    dataKey: 'reportDateTime',
    isSortable: true,
  },
  {
    name: 'Event.reportingUser',
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: 'Event.responsibleUser',
    dataKey: 'responsibleUser.caption',
    isSortable: true,
  },
  {
    name: 'Surveillance tool last share date',
    dataKey: 'surveillanceToolLastShareDate',
    isSortable: true,
  },
  {
    name: 'Surveillance tool status',
    dataKey: 'surveillanceToolStatus',
    isSortable: true,
  },
  {
    name: 'Surveillance tool share count',
    dataKey: 'surveillanceToolShareCount',
    isSortable: true,
  },
  {
    name: 'Event.numberOfPendingTasks',
    dataKey: 'contactCountSourceInEvent',
    isSortable: true,
  },
  {
    name: 'Event.participantCount',
    dataKey: 'participantCount',
    isSortable: true,
  },
  {
    name: 'Event.caseCount',
    dataKey: 'caseCount',
    isSortable: true,
  },
  {
    name: 'Event.deathCount',
    dataKey: 'deathCount',
    isSortable: true,
  },
  {
    name: 'Event.contactCount',
    dataKey: 'contactCount',
    isSortable: true,
  },
];
