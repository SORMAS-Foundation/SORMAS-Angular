import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_CHECKBOX,
  FORM_DATA_RADIO,
  PointOfEntryType,
  YesNoUnknown,
  QuarantineType,
  Disease,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const entryPointTypeOptions = pipe.transform(PointOfEntryType);
const yesNoUnknownOptions = pipe.transform(YesNoUnknown);
const placeOfQuarantineOptions = pipe.transform(QuarantineType);
const diseaseOptions = pipe.transform(Disease);

export const FORM_DATA_ENTRY = [
  {
    id: 'reportDate',
    title: 'captions.TravelEntry.reportDate',
    required: true,
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        label: 'captions.TravelEntry.reportDate',
      },
    ],
  },
  {
    id: 'externalData',
    title: 'externalData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.TravelEntry.externalId',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'disease',
    title: 'captions.disease',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        options: diseaseOptions,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant',
        label: 'captions.TravelEntry.diseaseVariant',
        options: [],
        dependingOn: 'disease',
        dependingOnValues: ['CORONAVIRUS'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'recovered',
        label: 'captions.TravelEntry.recovered',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'vaccinated',
        label: 'captions.TravelEntry.vaccinated',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'testedNegative',
        label: 'captions.TravelEntry.testedNegative',
      },
    ],
  },
  {
    id: 'jurisdiction',
    title: 'strings.headingResponsibleJurisdiction',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.TravelEntry.responsibleRegion',
        service: 'regionService',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.TravelEntry.responsibleDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.TravelEntry.responsibleCommunity',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
      },
    ],
  },
  {
    id: 'pointOfEntry',
    title: 'captions.travelEntryPointOfEntry',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'differentJurisdiction',
        label: 'captions.TravelEntry.differentPointOfEntryJurisdiction',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntryRegion.uuid',
        label: 'captions.TravelEntry.pointOfEntryRegion',
        service: 'regionService',
        newLine: true,
        validation: ['required'],
        dependingOn: 'differentJurisdiction',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntryDistrict.uuid',
        label: 'captions.TravelEntry.pointOfEntryDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        validation: ['required'],
        dependingOn: 'differentJurisdiction',
        dependingOnValues: [true],
      },

      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry.uuid',
        label: 'captions.travelEntryPointOfEntry',
        options: entryPointTypeOptions,
        newLine: true,
        validation: ['required'],
        dependingOn: 'differentJurisdiction',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'pointOfEntryDetails',
        label: 'captions.TravelEntry.pointOfEntryDetails',
        validation: ['required'],
        dependingOn: 'pointOfEntry.uuid',
      },
    ],
  },
  {
    id: 'quarantine',
    title: 'captions.TravelEntry.quarantine',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomePossible',
        options: yesNoUnknownOptions,
        label: 'captions.TravelEntry.quarantineHomePossible',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomeSupplyEnsured',
        options: yesNoUnknownOptions,
        label: 'captions.TravelEntry.quarantineHomeSupplyEnsured',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomeSupplyEnsuredComment',
        label: 'captions.TravelEntry.quarantineHomeSupplyEnsuredComment',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: 'travelEntries.placeOfQuarantine',
        options: placeOfQuarantineOptions,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineFrom',
        label: 'CaseData.quarantinePeriod',
        hint: 'travelEntries.startDate',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        label: ' ',
        hint: 'travelEntries.endDate',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedVerbally',
        label: 'captions.TravelEntry.quarantineOrderedVerbally',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedVerballyDate',
        label: ' ',
        hint: 'captions.TravelEntry.quarantineOrderedVerballyDate',
        dependingOn: 'quarantineOrderedVerbally',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedOfficialDocument',
        label: 'captions.TravelEntry.quarantineOrderedOfficialDocument',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedOfficialDocumentDate',
        label: ' ',
        hint: 'captions.TravelEntry.quarantineOrderedOfficialDocumentDate',
        dependingOn: 'quarantineOrderedOfficialDocument',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOfficialOrderSent',
        label: 'captions.TravelEntry.quarantineOfficialOrderSent',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOfficialOrderSentDate',
        label: ' ',
        hint: 'captions.TravelEntry.quarantineOfficialOrderSentDate',
        dependingOn: 'quarantineOfficialOrderSent',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'captions.TravelEntry.quarantineHelpNeeded',
        newLine: true,
      },
    ],
  },
];
