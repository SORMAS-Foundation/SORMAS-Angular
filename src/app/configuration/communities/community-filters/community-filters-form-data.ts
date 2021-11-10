import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  EntityRelevanceStatusOptions,
} from '../../../app.constants';
import { FORM_DATA_WIDGET } from '../../../_constants/form-data';
import { FormGroupStyleType } from '../../../_models/common';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const relevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);

export const FORM_DATA_COMMUNITY_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameEpidLike',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevanceStatus',
    title: 'strings.entityCountries',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: relevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'more',
    title: 'strings.headingLocation',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
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
            placeholder: 'captions.region',
            className: 'size-full',
          },
          district: {
            key: 'district.uuid',
            placeholder: 'captions.district',
            className: 'size-full',
          },
        },
      },
    ],
  },
];
