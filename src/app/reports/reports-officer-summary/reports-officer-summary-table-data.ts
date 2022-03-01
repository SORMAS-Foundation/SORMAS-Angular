import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.WeeklyReportOfficerSummary.officer',
    dataKey: 'officer.caption',
    isSortable: true,
  },
  {
    name: 'captions.districtName',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.WeeklyReportOfficerSummary.officerReportDate',
    dataKey: 'officerReportDate',
    alternateData: 'captions.weeklyReportNoReport',
    isSortable: true,
  },
  {
    name: 'captions.WeeklyReportOfficerSummary.totalCaseCount',
    dataKey: 'totalCaseCount',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportOfficerSummary.informants',
    additionalName: 'captions.weeklyReportOfficerInformants',
    dataKey: 'informants',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportOfficerSummary.informantReports',
    dataKey: 'informantReports',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportOfficerSummary.informantReportPercentage',
    dataKey: 'informantReportPercentage',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1%',
      params: ['informantReportPercentage'],
      match: {
        'value-low': [-0.01, 25.01],
        'value-medium': [25, 50.01],
        'value-normal': [50, 75.01],
        'value-high': [75, 100.01],
      },
    },
  },
];
