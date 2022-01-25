import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  EpiWeekFilterOption,
  FORM_DATA_WIDGET,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const epiWeekFilterOption = pipe.transform(EpiWeekFilterOption);

export const FORM_DATA_MSERS_ADD = [
  {
    id: 'msers',
    title: 'headingAggregateReports',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiWeekFilter',
        options: epiWeekFilterOption,
        value: 'SPECIFY_WEEK',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'strings.year',
        options: [],
        value: new Date().getFullYear(),
        className: 'size-small',
        newLine: true,
        allowClear: false,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epiWeek',
        label: 'strings.epiWeek',
        service: 'helperService',
        serviceMethod: 'getEpiWeeksForYear',
        determinedBy: 'year',
        className: 'size-small',
        allowClear: false,
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        service: 'regionService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.district',
        service: 'districtService',
        determinedBy: 'region.uuid',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'captions.facility',
        service: 'facilityService',
        determinedBy: 'district.uuid',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry.uuid',
        label: 'captions.pointOfEntry',
        service: 'entryPointService',
        determinedBy: 'district.uuid',
      },
    ],
  },
  {
    id: 'diseases',
    title: 'captions.disease',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-msers-diseases',
        key: 'diseases',
        className: 'fullwidth',
      },
    ],
  },
];
