import { FORM_DATA_STATISTICS_FILTERS_CASE } from './statistics-filters-form-data-case';
import { FORM_DATA_STATISTICS_FILTERS_PERSON } from './statistics-filters-form-data-person';
import { FORM_DATA_STATISTICS_FILTERS_PLACE } from './statistics-filters-form-data-place';
import { FORM_DATA_STATISTICS_FILTERS_TIME } from './statistics-filters-form-data-time';

export const FORM_DATA_STATISTICS_FILTERS = [
  {
    id: 'case',
    title: 'enum.StatisticsCaseAttributeGroup.CASE',
    data: FORM_DATA_STATISTICS_FILTERS_CASE,
  },
  {
    id: 'person',
    title: 'enum.StatisticsCaseAttributeGroup.PERSON',
    data: FORM_DATA_STATISTICS_FILTERS_PERSON,
  },
  {
    id: 'place',
    title: 'enum.StatisticsCaseAttributeGroup.PLACE',
    data: FORM_DATA_STATISTICS_FILTERS_PLACE,
  },
  {
    id: 'time',
    title: 'enum.StatisticsCaseAttributeGroup.TIME',
    data: FORM_DATA_STATISTICS_FILTERS_TIME,
  },
];
