import {
  EntityRelevanceStatusOptions,
  FORM_DATA_CHECKBOX,
  FORM_DATA_RADIO,
  FORM_DATA_SEARCHBOX,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const travelEntryRelevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);

export const FORM_DATA_ENTRY_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'nameUuidExternalIDLike',
        placeholder: 'strings.promptTravelEntrySearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'relevance',
    title: 'strings.entityTravelEntries',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: travelEntryRelevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'medicalAspects',
    title: 'headingMedicalAspects',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'onlyRecoveredEntries',
        label: 'captions.travelEntryOnlyRecoveredEntries',
        className: 'filter-checkbox',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'onlyVaccinatedEntries',
        label: 'captions.travelEntryOnlyVaccinatedEntries',
        className: 'filter-checkbox',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'onlyEntriesTestedNegative',
        label: 'captions.travelEntryOnlyEntriesTestedNegative',
        className: 'filter-checkbox',
      },
    ],
  },
  {
    id: 'adminAspects',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'onlyEntriesConvertedToCase',
        label: 'captions.travelEntryOnlyEntriesConvertedToCase',
        className: 'filter-checkbox',
      },
    ],
  },
];
