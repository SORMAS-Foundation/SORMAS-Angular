import { FORM_DATA_SEARCHBOX } from '../../../app.constants';
import { EventGroupRelevanceStatusOptions } from '../../../_constants/enums';
import { FORM_DATA_INPUT, FORM_DATA_RADIO, FORM_DATA_WIDGET } from '../../../_constants/form-data';
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
        ...FORM_DATA_INPUT,
        key: 'region',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'district',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'community',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region',
            placeholder: 'eventGroup.responsibleRegion',
            className: 'size-full',
          },
          district: {
            key: 'district',
            placeholder: 'eventGroup.responsibleDistrict',
            className: 'size-full',
            dependingOn: 'region',
          },
          community: {
            key: 'community',
            placeholder: 'eventGroup.responsibleCommunity',
            className: 'size-full',
            dependingOn: 'district',
          },
        },
      },
    ],
  },
];
