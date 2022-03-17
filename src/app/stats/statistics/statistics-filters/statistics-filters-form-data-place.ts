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
        key: 'region.uuid',
        label: 'enum.StatisticsCaseSubAttribute.REGION',
        service: 'regionService',
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'district.uuid',
        label: 'enum.StatisticsCaseSubAttribute.DISTRICT',
        service: 'districtService',
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'community.uuid',
        label: 'enum.StatisticsCaseSubAttribute.COMMUNITY',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.Facility.typeGroup',
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.Facility.type',
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'healthFacility.uuid',
        label: 'enum.StatisticsCaseSubAttribute.FACILITY',
        service: 'facilityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
          {
            key: 'community.uuid',
            optional: true,
          },
          {
            key: 'facilityTypeGroup',
            keyMap: 'typeGroup',
          },
          {
            key: 'facilityType',
            keyMap: 'type',
          },
        ],
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
];
