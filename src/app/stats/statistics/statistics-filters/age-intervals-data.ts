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

const optionsCommon: any[] = [
  {
    key: [15, 19],
    value: '15-19',
  },
  {
    key: [20, 24],
    value: '20-24',
  },
  {
    key: [25, 29],
    value: '25-29',
  },
  {
    key: [30, 39],
    value: '30-39',
  },
  {
    key: [40, 49],
    value: '40-49',
  },
  {
    key: [50, 59],
    value: '50-59',
  },
  {
    key: [60, 69],
    value: '60-69',
  },
  {
    key: [70, 79],
    value: '70-79',
  },
  {
    key: [80, null],
    value: '80+',
  },
  {
    key: [null, null],
    value: 'Not specified',
  },
];

const optionsAgeStratificationChildrenCoarse: any[] = [
  {
    key: [0, 14],
    value: '0-14',
  },
  ...optionsCommon,
];

const optionsAgeStratificationChildrenFine: any[] = [
  {
    key: [0, 0],
    value: '0',
  },
  {
    key: [1, 1],
    value: '1',
  },
  {
    key: [2, 2],
    value: '2',
  },
  {
    key: [3, 3],
    value: '3',
  },
  {
    key: [4, 4],
    value: '4',
  },
  {
    key: [5, 9],
    value: '5-9',
  },
  {
    key: [10, 14],
    value: '10-14',
  },
  ...optionsCommon,
];

const optionsAgeStratificationChildrenMedium: any[] = [
  {
    key: [0, 4],
    value: '0-4',
  },
  {
    key: [5, 9],
    value: '5-9',
  },
  {
    key: [10, 14],
    value: '10-14',
  },
  ...optionsCommon,
];

const optionsAgeStratificationBasic: any[] = [
  {
    key: [0, 0],
    value: '0',
  },
  {
    key: [1, 4],
    value: '1-4',
  },
  {
    key: [5, 14],
    value: '5-14',
  },
  {
    key: [15, null],
    value: '15+',
  },
  {
    key: [null, null],
    value: 'Not specified',
  },
];

export const AGE_INTERVALS: { [key: string]: any[] } = {
  ONE_YEAR: optionsAgeStratificationYear,
  FIVE_YEAR: optionsAgeStratificationFiveYear,
  BASIC: optionsAgeStratificationBasic,
  CHILDREN_COARSE: optionsAgeStratificationChildrenCoarse,
  CHILDREN_MEDIUM: optionsAgeStratificationChildrenMedium,
  CHILDREN_FINE: optionsAgeStratificationChildrenFine,
};
