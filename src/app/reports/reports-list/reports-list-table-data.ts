import { DEFAULT_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Informant',
    dataKey: 'assignedOfficer.caption',
    isSortable: true,
  },
  {
    name: 'captions.communityName',
    dataKey: 'community.caption',
    isSortable: true,
  },
  {
    name: 'captions.facility',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: 'captions.WeeklyReportInformantSummary.informantReportDate',
    dataKey: 'reportDateTime',
    alternateData: 'captions.weeklyReportNoReport',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: DEFAULT_DATE_FORMAT,
      breakSpaces: true,
    },
  },
  {
    name: 'captions.WeeklyReportInformantSummary.totalCaseCount',
    dataKey: 'totalCaseCount',
    isSortable: true,
    align: 'right',
  },
];
