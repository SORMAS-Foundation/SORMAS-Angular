import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  FacilityStatus,
} from '../../../app.constants';
import { FORM_DATA_INPUT, FORM_DATA_WIDGET } from '../../../_constants/form-data';
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
        ...FORM_DATA_INPUT,
        key: 'country.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'region.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'district.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'community.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          country: {
            key: 'country.uuid',
            placeholder: 'captions.country',
            className: 'size-full',
          },
          region: {
            key: 'region.uuid',
            placeholder: 'captions.Facility.region',
            className: 'size-full',
            dependingOn: 'country',
          },
          district: {
            key: 'district.uuid',
            placeholder: 'captions.Facility.district',
            className: 'size-full',
            dependingOn: 'region',
          },
          community: {
            key: 'community.uuid',
            placeholder: 'captions.Facility.community',
            className: 'size-full',
            dependingOn: 'district',
          },
        },
      },
    ],
  },
];
