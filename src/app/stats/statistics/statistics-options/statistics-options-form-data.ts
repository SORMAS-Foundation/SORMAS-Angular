export const STATISTICS_ATTRIBUTES_GROUPS = [
  {
    name: 'enum.StatisticsCaseAttributeGroup.TIME',
    attributes: [
      {
        key: 'ONSET_TIME',
        value: 'enum.StatisticsCaseAttribute.ONSET_TIME',
      },
      {
        key: 'REPORT_TIME',
        value: 'enum.StatisticsCaseAttribute.REPORT_TIME',
      },
      {
        key: 'OUTCOME_TIME',
        value: 'enum.StatisticsCaseAttribute.OUTCOME_TIME',
      },
    ],
  },
  {
    name: 'enum.StatisticsCaseAttributeGroup.PLACE',
    attributes: [
      {
        key: 'JURISDICTION',
        value: 'enum.StatisticsCaseAttribute.JURISDICTION',
      },
    ],
  },
  {
    name: 'enum.StatisticsCaseAttributeGroup.PERSON',
    attributes: [
      {
        key: 'SEX',
        value: 'enum.StatisticsCaseAttribute.SEX',
      },
      {
        key: 'AGE_INTERVAL_1_YEAR',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_1_YEAR',
      },
      {
        key: 'AGE_INTERVAL_5_YEARS',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_5_YEARS',
      },
      {
        key: 'AGE_INTERVAL_CHILDREN_COARSE',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_COARSE',
      },
      {
        key: 'AGE_INTERVAL_CHILDREN_FINE',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_FINE',
      },
      {
        key: 'AGE_INTERVAL_CHILDREN_MEDIUM',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_MEDIUM',
      },
      {
        key: 'AGE_INTERVAL_BASIC',
        value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_BASIC',
      },
    ],
  },
  {
    name: 'enum.StatisticsCaseAttributeGroup.CASE',
    attributes: [
      {
        key: 'DISEASE',
        value: 'enum.StatisticsCaseAttribute.DISEASE',
      },
      {
        key: 'CLASSIFICATION',
        value: 'enum.StatisticsCaseAttribute.CLASSIFICATION',
      },
      {
        key: 'OUTCOME',
        value: 'enum.StatisticsCaseAttribute.OUTCOME',
      },
      {
        key: 'REPORTING_USER_ROLE',
        value: 'enum.StatisticsCaseAttribute.REPORTING_USER_ROLE',
      },
    ],
  },
];

export const STATISTICS_TIME_ATTRIBUTES = [
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
];

export const STATISTICS_PLACE_ATTRIBUTES = [
  {
    key: 'REGION',
    value: 'enum.StatisticsCaseSubAttribute.REGION',
  },
  {
    key: 'DISTRICT',
    value: 'enum.StatisticsCaseSubAttribute.DISTRICT',
  },
  {
    key: 'COMMUNITY',
    value: 'enum.StatisticsCaseSubAttribute.COMMUNITY',
  },
  {
    key: 'FACILITY',
    value: 'enum.StatisticsCaseSubAttribute.FACILITY',
  },
];
