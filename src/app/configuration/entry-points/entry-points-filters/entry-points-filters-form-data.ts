import { FORM_DATA_RADIO, FORM_DATA_SEARCHBOX } from '../../../app.constants';
import {
  EntryPointActiveOptions,
  EntryPointRelevanceStatusOptions,
  EntryPointTypeOptions,
} from '../../../_constants/enums';
import { FORM_DATA_SELECT } from '../../../_constants/form-data';
import { FormGroupStyleType } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const relevanceStatusOptions = pipe.transform(EntryPointRelevanceStatusOptions);
const entryPointTypeOptions = pipe.transform(EntryPointTypeOptions);
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
        key: 'country.uui',
        placeholder: 'captions.country',
        className: 'fullwidth',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uui',
        placeholder: 'captions.region',
        className: 'fullwidth',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uui',
        placeholder: 'captions.district',
        className: 'fullwidth',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
];
