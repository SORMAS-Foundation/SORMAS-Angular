import {
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  Disease,
  PlaceOfStay,
  FORM_DATA_CHECKBOX,
  CaseClassification,
  InvestigationStatus,
  CaseOutcome,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsCaseClassification = pipe.transform(CaseClassification);
const optionsInvestigationStatus = pipe.transform(InvestigationStatus);
const optionsCaseOutcome = pipe.transform(CaseOutcome);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);

export const FORM_DATA_CASE_EDIT = [
  {
    id: 'disease',
    title: 'captions.disease',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'diseaseVisibleCheckbox',
        label: 'captions.bulkDisease',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        validation: ['required'],
        options: optionsDisease,
        dependingOn: 'diseaseVisibleCheckbox',
        newLine: true,
      },
    ],
  },
  {
    id: 'classification',
    title: 'captions.Contact.caze.caseClassification',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'classificationVisibleCheckbox',
        label: 'captions.bulkCaseClassification',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'caseClassification',
        options: optionsCaseClassification,
        dependingOn: 'classificationVisibleCheckbox',
      },
    ],
  },
  {
    id: 'investigation',
    title: 'captions.CaseData.investigationStatus',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'investigationVisibleCheckbox',
        label: 'captions.bulkInvestigationStatus',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        options: optionsInvestigationStatus,
        dependingOn: 'investigationVisibleCheckbox',
      },
    ],
  },
  {
    id: 'outcome',
    title: 'captions.CaseData.outcome',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'outcomeVisibleCheckbox',
        label: 'captions.bulkCaseOutcome',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'outcome',
        newLine: true,
        options: optionsCaseOutcome,
        dependingOn: 'outcomeVisibleCheckbox',
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'locationVisibleCheckbox',
        label: 'captions.bulkFacility',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        newLine: true,
        label: 'captions.CaseData.responsibleRegion',
        validation: ['required'],
        service: 'regionService',
        className: 'size-large',
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.CaseData.responsibleDistrict',
        validation: ['required'],
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        className: 'size-large',
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.CaseData.responsibleCommunity',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        className: 'size-large',
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        newLine: true,
        validation: ['required'],
        options: optionsPlaceOfStay,
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.Facility.typeGroup',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.Facility.type',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'captions.Facility',
        validation: ['required'],
        service: 'facilityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
          {
            key: 'community.uuid',
            optional: true,
          },
          {
            key: 'facilityTypeGroup',
            keyMap: 'typeGroup',
          },
          {
            key: 'facilityType',
            keyMap: 'type',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'captions.CaseData.noneHealthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
];
