import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.region',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.WeeklyReportRegionSummary.officers',
    additionalName: 'captions.weeklyReportRegionOfficers',
    dataKey: 'officers',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportRegionSummary.officerReports',
    dataKey: 'officerReports',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportRegionSummary.officerReportPercentage',
    dataKey: 'officerReportPercentage',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1%',
      params: ['officerReportPercentage'],
      match: {
        'value-low': [-0.01, 25.01],
        'value-medium': [25, 50.01],
        'value-normal': [50, 75.01],
        'value-high': [75, 100.01],
      },
    },
  },
  {
    name: 'captions.WeeklyReportRegionSummary.officerZeroReports',
    dataKey: 'officerZeroReports',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportRegionSummary.informants',
    additionalName: 'captions.weeklyReportRegionInformants',
    dataKey: 'informants',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportRegionSummary.informantReports',
    dataKey: 'informantReports',
    isSortable: true,
    align: 'right',
  },
  {
    name: 'captions.WeeklyReportRegionSummary.informantReportPercentage',
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
  {
    name: 'captions.WeeklyReportRegionSummary.informantZeroReports',
    dataKey: 'informantZeroReports',
    isSortable: true,
    align: 'right',
  },
];
