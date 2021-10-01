import { FORM_DATA_MULTISELECT, FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { Sex } from '../../../_models/models';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsSex = pipe.transform(Sex);
const optionsStratifications = [
  {
    key: 'ONE_YEAR',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_1_YEAR',
  },
  {
    key: 'FIVE_YEAR',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_5_YEARS',
  },
  {
    key: 'CHILDREN_COARSE',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_COARSE',
  },
  {
    key: 'CHILDREN_MEDIUM',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_MEDIUM',
  },
  {
    key: 'CHILDREN_FINE',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_CHILDREN_FINE',
  },
  {
    key: 'BASIC',
    value: 'enum.StatisticsCaseAttribute.AGE_INTERVAL_BASIC',
  },
];

export const FORM_DATA_STATISTICS_FILTERS_PERSON: FormBase<any>[] = [
  {
    id: 'placeOfResidence',
    title: 'enum.StatisticsCaseAttribute.PLACE_OF_RESIDENCE',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'personRegions',
        label: 'enum.StatisticsCaseSubAttribute.PERSON_REGION',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'personDistricts',
        label: 'enum.StatisticsCaseSubAttribute.PERSON_DISTRICT',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'personCommunities',
        label: 'enum.StatisticsCaseSubAttribute.PERSON_COMMUNITY',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'personCity',
        label: 'enum.StatisticsCaseSubAttribute.PERSON_CITY',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'personPostCode',
        label: 'enum.StatisticsCaseSubAttribute.PERSON_POSTCODE',
      },
    ],
  },
  {
    id: 'sex',
    title: 'enum.StatisticsCaseAttribute.SEX',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'sexes',
        label: 'enum.StatisticsCaseAttribute.SEX',
        options: optionsSex,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
  {
    id: 'ageStratification',
    title: 'Age stratification',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'ageStratification',
        label: 'Age stratification',
        options: optionsStratifications,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'ageIntervals',
        label: 'Age intervals',
        options: [],
        active: false,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
];
