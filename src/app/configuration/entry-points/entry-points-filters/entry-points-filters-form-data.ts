import {
  FORM_DATA_RADIO,
  FORM_DATA_SEARCHBOX,
  FORM_DATA_SELECT,
  PointOfEntryType,
  EntryPointActiveOptions,
  EntryPointRelevanceStatusOptions,
} from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';
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
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        placeholder: 'captions.country',
        service: 'countryService',
        newLine: false,
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        placeholder: 'captions.region',
        service: 'regionService',
        determinedBy: ['country.uuid'],
        newLine: false,
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        placeholder: 'captions.district',
        service: 'districtService',
        determinedBy: ['region.uuid'],
        newLine: false,
        className: 'size-full',
      },
    ],
  },
];
