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
        key: 'IdLike',
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
    id: 'medical',
    title: 'headingMedicalAspects',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'recovered',
        label: 'captions.travelEntryOnlyRecoveredEntries',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'vaccinated',
        label: 'captions.travelEntryOnlyVaccinatedEntries',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'testedNegative',
        label: 'captions.travelEntryOnlyEntriesTestedNegative',
      },
    ],
  },
];
