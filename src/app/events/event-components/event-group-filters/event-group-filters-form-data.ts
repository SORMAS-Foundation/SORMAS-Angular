import {
  FORM_DATA_SEARCHBOX,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  EventGroupRelevanceStatusOptions,
} from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const relevanceStatusOptions = pipe.transform(EventGroupRelevanceStatusOptions);

export const FORM_DATA_EVENT_GROUP_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptEventsSearchFieldEventGroups',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevanceStatus',
    title: 'captions.actionGroupEvent',
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
    id: 'events',
    title: 'strings.entityEvents',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeTextEvent',
        placeholder: 'eventGroupEventSearch',
        className: 'fullwidth',
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
        placeholder: 'eventGroup.responsibleRegion',
        service: 'regionService',
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        placeholder: 'eventGroup.responsibleDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        placeholder: 'eventGroup.responsibleCommunity',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        className: 'size-full',
      },
    ],
  },
];
