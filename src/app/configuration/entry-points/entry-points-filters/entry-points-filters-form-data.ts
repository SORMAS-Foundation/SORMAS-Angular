import { FORM_DATA_RADIO, FORM_DATA_SEARCHBOX } from '../../../app.constants';
import {
  EntryPointActiveOptions,
  EntryPointRelevanceStatusOptions,
} from '../../../_constants/enums';
import { FORM_DATA_INPUT, FORM_DATA_SELECT, FORM_DATA_WIDGET } from '../../../_constants/form-data';
import { FormGroupStyleType } from '../../../_models/common';
import { PointOfEntryType } from '../../../_models/pointOfEntryType';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const relevanceStatusOptions = pipe.transform(EntryPointRelevanceStatusOptions);
const entryPointTypeOptions = pipe.transform(PointOfEntryType);
const entryPointActiveOptions = pipe.transform(EntryPointActiveOptions);

export const FORM_DATA_ENTRY_POINT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameLike',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevanceStatus',
    title: 'captions.pointOfEntry',
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
    id: 'type',
    title: 'EntryPointFiltersType',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntryType',
        options: entryPointTypeOptions,
        placeholder: 'captions.PointOfEntry.pointOfEntryType',
        className: 'fullwidth',
        separated: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'active',
        options: entryPointActiveOptions,
        placeholder: 'captions.PointOfEntry.active',
        className: 'fullwidth',
        separated: true,
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
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          country: {
            key: 'country.uuid',
            placeholder: 'captions.country',
            newLine: false,
            className: 'size-full',
          },
          region: {
            key: 'region.uuid',
            placeholder: 'captions.region',
            newLine: false,
            className: 'size-full',
          },
          district: {
            key: 'district.uuid',
            placeholder: 'captions.district',
            newLine: false,
            className: 'size-full',
          },
        },
      },
    ],
  },
];
