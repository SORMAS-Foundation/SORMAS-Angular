import { FORM_DATA_SELECT, FORM_DATA_MULTISELECT, FORM_DATA_DATE } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';

const optionsTimePeriod = [
  {
    key: 'YEAR',
    value: 'enum.StatisticsCaseSubAttribute.YEAR',
  },
  {
    key: 'QUARTER',
    value: 'enum.StatisticsCaseSubAttribute.QUARTER',
  },
  {
    key: 'MONTH',
    value: 'enum.StatisticsCaseSubAttribute.MONTH',
  },
  {
    key: 'EPI_WEEK',
    value: 'enum.StatisticsCaseSubAttribute.EPI_WEEK',
  },
  {
    key: 'QUARTER_OF_YEAR',
    value: 'enum.StatisticsCaseSubAttribute.QUARTER_OF_YEAR',
  },
  {
    key: 'MONTH_OF_YEAR',
    value: 'enum.StatisticsCaseSubAttribute.MONTH_OF_YEAR',
  },
  {
    key: 'EPI_WEEK_OF_YEAR',
    value: 'enum.StatisticsCaseSubAttribute.EPI_WEEK_OF_YEAR',
  },
  {
    key: 'DATE_RANGE',
    value: 'enum.StatisticsCaseSubAttribute.DATE_RANGE',
  },
];
const currentYear = new Date().getFullYear();
const optionsTimePeriodYear = new Array(1)
  .fill({})
  .map((e, i) => ({ key: currentYear - i, value: `${currentYear - i}` }));
const optionsTimePeriodQuarter = new Array(4)
  .fill({})
  .map((e, i) => ({ key: i + 1, value: `Q${i + 1}` }));
const optionsTimePeriodQuarterYear = new Array(4).fill({}).map((e, i) => ({
  key: { quarter: i + 1, year: currentYear },
  value: `Q${i + 1}/${currentYear}`,
}));
const optionsTimePeriodMonth = [
  {
    key: 'JANUARY',
    value: 'January',
  },
  {
    key: 'FEBRUARY',
    value: 'February',
  },
  {
    key: 'MARCH',
    value: 'March',
  },
  {
    key: 'APRIL',
    value: 'April',
  },
  {
    key: 'MAY',
    value: 'May',
  },
  {
    key: 'JUNE',
    value: 'June',
  },
  {
    key: 'JULY',
    value: 'July',
  },
  {
    key: 'AUGUST',
    value: 'August',
  },
  {
    key: 'SEPTEMBER',
    value: 'September',
  },
  {
    key: 'OCTOBER',
    value: 'October',
  },
  {
    key: 'NOVEMBER',
    value: 'November',
  },
  {
    key: 'DECEMBER',
    value: 'December',
  },
];
const optionsTimePeriodMonthYear = [
  {
    key: { month: 'JANUARY', year: currentYear },
    value: `January ${currentYear}`,
  },
  {
    key: { month: 'FEBRUARY', year: currentYear },
    value: `February ${currentYear}`,
  },
  {
    key: { month: 'MARCH', year: currentYear },
    value: `March ${currentYear}`,
  },
  {
    key: { month: 'APRIL', year: currentYear },
    value: `April ${currentYear}`,
  },
  {
    key: { month: 'MAY', year: currentYear },
    value: `May ${currentYear}`,
  },
  {
    key: { month: 'JUNE', year: currentYear },
    value: `June ${currentYear}`,
  },
  {
    key: { month: 'JULY', year: currentYear },
    value: `July ${currentYear}`,
  },
  {
    key: { month: 'AUGUST', year: currentYear },
    value: `August ${currentYear}`,
  },
  {
    key: { month: 'SEPTEMBER', year: currentYear },
    value: `September ${currentYear}`,
  },
  {
    key: { month: 'OCTOBER', year: currentYear },
    value: `October ${currentYear}`,
  },
  {
    key: { month: 'NOVEMBER', year: currentYear },
    value: `November ${currentYear}`,
  },
  {
    key: { month: 'DECEMBER', year: currentYear },
    value: `December ${currentYear}`,
  },
];
const optionsTimePeriodEpiWeek = new Array(53)
  .fill({})
  .map((e, i) => ({ key: `Wk ${i + 1}`, value: `Wk ${i + 1}` }));
const optionsTimePeriodEpiWeekYear = new Array(53)
  .fill({})
  .map((e, i) => ({ key: `Wk ${i + 1} - ${currentYear}`, value: `Wk ${i + 1} - ${currentYear}` }));
const optionsAgeStratificationYear: any[] = new Array(79)
  .fill({})
  .map((e, i) => ({ key: [i, i], value: `${i}` }));
optionsAgeStratificationYear.push({
  key: [80, null],
  value: '80+',
});
optionsAgeStratificationYear.push({
  key: [null, null],
  value: 'Not specified',
});
const optionsAgeStratificationFiveYear: any[] = new Array(16)
  .fill({})
  .map((e, i) => ({ key: [i * 5, i * 5 + 4], value: `${i * 5}-${i * 5 + 4}` }));
optionsAgeStratificationFiveYear.push({
  key: [80, null],
  value: '80+',
});
optionsAgeStratificationFiveYear.push({
  key: [null, null],
  value: 'Not specified',
});

export const FORM_DATA_STATISTICS_FILTERS_TIME: FormBase<any>[] = [
  {
    id: 'onsetTime',
    title: 'enum.StatisticsCaseAttribute.ONSET_TIME',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'onset',
        label: 'enum.StatisticsCaseAttribute.ONSET_TIME',
        options: optionsTimePeriod,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetYears',
        label: 'enum.StatisticsCaseSubAttribute.YEAR',
        options: optionsTimePeriodYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetQuarters',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER',
        options: optionsTimePeriodQuarter,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['QUARTER'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetMonths',
        label: 'enum.StatisticsCaseSubAttribute.MONTH',
        options: optionsTimePeriodMonth,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['MONTH'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetEpiWeeks',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK',
        options: optionsTimePeriodEpiWeek,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['EPI_WEEK'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetQuartersOfYear',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER_OF_YEAR',
        options: optionsTimePeriodQuarterYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['QUARTER_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetMonthsOfYear',
        label: 'enum.StatisticsCaseSubAttribute.MONTH_OF_YEAR',
        options: optionsTimePeriodMonthYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['MONTH_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'onsetEpiWeeksOfYear',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK_OF_YEAR',
        options: optionsTimePeriodEpiWeekYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'onset',
        dependingOnValues: ['EPI_WEEK_OF_YEAR'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'onsetDateFrom',
        label: 'captions.from',
        active: false,
        dependingOn: 'onset',
        dependingOnValues: ['DATE_RANGE'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'onsetDateTo',
        label: 'captions.to',
        active: false,
        dependingOn: 'onset',
        dependingOnValues: ['DATE_RANGE'],
      },
    ],
  },
  {
    id: 'reportTime',
    title: 'enum.StatisticsCaseAttribute.REPORT_TIME',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'report',
        label: 'enum.StatisticsCaseAttribute.REPORT_TIME',
        options: optionsTimePeriod,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportYears',
        label: 'enum.StatisticsCaseSubAttribute.YEAR',
        options: optionsTimePeriodYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportQuarters',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER',
        options: optionsTimePeriodQuarter,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['QUARTER'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportMonths',
        label: 'enum.StatisticsCaseSubAttribute.MONTH',
        options: optionsTimePeriodMonth,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['MONTH'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportEpiWeeks',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK',
        options: optionsTimePeriodEpiWeek,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['EPI_WEEK'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportQuartersOfYear',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER_OF_YEAR',
        options: optionsTimePeriodQuarterYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['QUARTER_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportMonthsOfYear',
        label: 'enum.StatisticsCaseSubAttribute.MONTH_OF_YEAR',
        options: optionsTimePeriodMonthYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['MONTH_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportEpiWeeksOfYear',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK_OF_YEAR',
        options: optionsTimePeriodEpiWeekYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'report',
        dependingOnValues: ['EPI_WEEK_OF_YEAR'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateFrom',
        label: 'captions.from',
        active: false,
        dependingOn: 'report',
        dependingOnValues: ['DATE_RANGE'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTo',
        label: 'captions.to',
        active: false,
        dependingOn: 'report',
        dependingOnValues: ['DATE_RANGE'],
      },
    ],
  },
  {
    id: 'outcomeTime',
    title: 'enum.StatisticsCaseAttribute.OUTCOME_TIME',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'outcome',
        label: 'enum.StatisticsCaseAttribute.OUTCOME_TIME',
        options: optionsTimePeriod,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeYears',
        label: 'enum.StatisticsCaseSubAttribute.YEAR',
        options: optionsTimePeriodYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeQuarters',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER',
        options: optionsTimePeriodQuarter,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['QUARTER'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeMonths',
        label: 'enum.StatisticsCaseSubAttribute.MONTH',
        options: optionsTimePeriodMonth,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['MONTH'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeEpiWeeks',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK',
        options: optionsTimePeriodEpiWeek,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['EPI_WEEK'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeQuartersOfYear',
        label: 'enum.StatisticsCaseSubAttribute.QUARTER_OF_YEAR',
        options: optionsTimePeriodQuarterYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['QUARTER_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeMonthsOfYear',
        label: 'enum.StatisticsCaseSubAttribute.MONTH_OF_YEAR',
        options: optionsTimePeriodMonthYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['MONTH_OF_YEAR'],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomeEpiWeeksOfYear',
        label: 'enum.StatisticsCaseSubAttribute.EPI_WEEK_OF_YEAR',
        options: optionsTimePeriodEpiWeekYear,
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        dependingOn: 'outcome',
        dependingOnValues: ['EPI_WEEK_OF_YEAR'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDateFrom',
        label: 'captions.from',
        active: false,
        dependingOn: 'outcome',
        dependingOnValues: ['DATE_RANGE'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDateTo',
        label: 'captions.to',
        active: false,
        dependingOn: 'outcome',
        dependingOnValues: ['DATE_RANGE'],
      },
    ],
  },
];
