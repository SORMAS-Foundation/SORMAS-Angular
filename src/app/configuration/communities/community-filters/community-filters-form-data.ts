import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  EntityRelevanceStatusOptions,
} from '../../../app.constants';
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
    title: 'captions.View.configuration.communities.short',
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
        placeholder: 'captions.Country',
        service: 'countryService',
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        placeholder: 'captions.Region',
        service: 'regionService',
        determinedBy: 'country.uuid',
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        placeholder: 'captions.District',
        service: 'districtService',
        determinedBy: 'region.uuid',
        className: 'size-full',
      },
    ],
  },
];
