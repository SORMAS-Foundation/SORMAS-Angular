import { FORM_DATA_SELECT, FORM_DATA_MULTISELECT } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';

export const FORM_DATA_STATISTICS_FILTERS_PLACE: FormBase<any>[] = [
  {
    id: 'jurisdiction',
    title: 'enum.StatisticsCaseAttribute.JURISDICTION',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'regions',
        label: 'enum.StatisticsCaseSubAttribute.REGION',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'districts',
        label: 'enum.StatisticsCaseSubAttribute.DISTRICT',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'communities',
        label: 'enum.StatisticsCaseSubAttribute.COMMUNITY',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacilitiesCategory',
        label: 'captions.facilityTypeGroup',
        options: [],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacilitiesType',
        label: 'captions.facilityType',
        options: [],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'healthFacilities',
        label: 'enum.StatisticsCaseSubAttribute.FACILITY',
        options: [],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
];
