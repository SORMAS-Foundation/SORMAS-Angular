import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  FacilityStatus,
} from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const facilityStatusOptions = pipe.transform(FacilityStatus);

export const FORM_DATA_FACILITY_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameCodeLike',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'facilityStatus',
    title: 'captions.facility',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'facilityStatus',
        options: facilityStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'facility',
    title: 'facilityDetails',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        placeholder: 'captions.facilityTypeGroup',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'type',
        placeholder: 'captions.Facility.type',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'country',
        placeholder: 'captions.country',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        placeholder: 'captions.Facility.region',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        placeholder: 'captions.Facility.district',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        placeholder: 'captions.Facility.community',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        className: 'fullwidth',
      },
    ],
  },
];
