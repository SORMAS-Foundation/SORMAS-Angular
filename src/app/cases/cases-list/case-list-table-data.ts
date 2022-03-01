import { LegendFollowUpIcons } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
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
    name: 'captions.CaseData.reInfection',
    dataKey: 'reInfection',
    isSortable: true,
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
    name: 'captions.CaseData.district',
    dataKey: 'district.caption',
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
];

export const legendDefs: any[] = [
  {
    iconName: LegendFollowUpIcons.NOT_SYMPTOMATIC,
    iconClass: 'visit-result-not-symptomatic',
    description: 'enum.VisitResult.NOT_SYMPTOMATIC',
  },
  {
    iconName: LegendFollowUpIcons.SYMPTOMATIC,
    iconClass: 'visit-result-symptomatic',
    description: 'enum.VisitResult.SYMPTOMATIC',
  },
  {
    iconName: LegendFollowUpIcons.UNAVAILABLE,
    iconClass: 'visit-result-unavailable',
    description: 'enum.VisitResult.UNAVAILABLE',
  },
  {
    iconName: LegendFollowUpIcons.UNCOOPERATIVE,
    iconClass: 'visit-result-uncooperative',
    description: 'enum.VisitResult.UNCOOPERATIVE',
  },
  {
    iconName: LegendFollowUpIcons.NOT_PERFORMED,
    iconClass: 'visit-result-not-performed',
    description: 'enum.VisitResult.NOT_PERFORMED',
  },
];
