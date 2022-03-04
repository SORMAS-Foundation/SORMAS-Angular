import { FORM_DATA_SELECT, FORM_DATA_SEARCHBOX } from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

export const FORM_DATA_MSERS_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptTaskSearchField',
      },
    ],
  },
  {
    id: 'adminAspect',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        options: [],
        service: 'regionService',
        placeholder: 'captions.CaseData.responsibleRegion',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        options: [],
        service: 'districtService',
        determinedBy: ['region.uuid'],
        placeholder: 'captions.CaseData.responsibleDistrict',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        options: [],
        service: 'facilityService',
        determinedBy: ['district.uuid'],
        placeholder: 'captions.CaseData.healthFacility',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry.uuid',
        options: [],
        service: 'entryPointService',
        determinedBy: ['district.uuid'],
        placeholder: 'captions.CaseData.pointOfEntry',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'headingDateFilter',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'yearFrom',
        options: [],
        placeholder: 'captions.from',
        allowClear: false,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epiWeekFrom',
        options: [],
        allowClear: false,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'yearTo',
        options: [],
        placeholder: 'captions.to',
        allowClear: false,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epiWeekTo',
        options: [],
        allowClear: false,
        className: 'fullwidth',
      },
    ],
  },
];
