import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Event id',
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: 'External id',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'External token',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'Event status',
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: 'Risk level',
    dataKey: 'riskLevel',
    isSortable: true,
    stylify: true,
  },
  {
    name: 'Investigation status',
    dataKey: 'eventInvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: 'Event management status',
    dataKey: 'eventManagementStatus',
    isSortable: true,
  },
  {
    name: 'Date of event',
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: 'Evolution date',
    dataKey: 'evolutionDate',
    isSortable: true,
  },
  {
    name: 'Disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'Title',
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: 'Groups',
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
  },
  {
    name: 'Region',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'District',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'Community',
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: 'Address',
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: 'Source type',
    dataKey: 'srcType',
    isSortable: true,
  },
  {
    name: 'Source of information',
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: 'Date of report',
    dataKey: 'reportDateTime',
    isSortable: true,
  },
  {
    name: 'Reporting user',
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: 'Responsible user',
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
    name: 'Pending tasks',
    dataKey: 'contactCountSourceInEvent',
    isSortable: true,
  },
  {
    name: 'Participants',
    dataKey: 'participantCount',
    isSortable: true,
  },
  {
    name: 'Cases',
    dataKey: 'caseCount',
    isSortable: true,
  },
  {
    name: 'Fatalities',
    dataKey: 'deathCount',
    isSortable: true,
  },
  {
    name: 'Contacts',
    dataKey: 'contactCount',
    isSortable: true,
  },
];
