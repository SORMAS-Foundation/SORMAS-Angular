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
    title: 'disease',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'diseaseVisibleCheckbox',
        label: 'bulkDisease',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'disease',
        validation: ['required'],
        options: optionsDisease,
        dependingOn: 'diseaseVisibleCheckbox',
        newLine: true,
      },
    ],
  },
  {
    id: 'classification',
    title: 'Contact.caze.caseClassification',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'classificationVisibleCheckbox',
        label: 'bulkCaseClassification',
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
    title: 'UserRightGroup.CASE_INVESTIGATION',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'investigationVisibleCheckbox',
        label: 'bulkInvestigationStatus',
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
    title: 'StatisticsCaseAttribute.OUTCOME',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'outcomeVisibleCheckbox',
        label: 'bulkCaseOutcome',
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
    title: 'Location',
    required: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'locationVisibleCheckbox',
        label: 'bulkFacility',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        newLine: true,
        label: 'CaseData.responsibleRegion',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        className: 'size-large',
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        label: 'CaseData.responsibleDistrict',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
        className: 'size-large',
        dependingOn: 'locationVisibleCheckbox',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        label: 'CaseData.responsibleCommunity',
        options: [
          {
            key: 'default',
            value: 'defaultCommunity',
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
        key: 'healthFacility.uuid',
        label: 'CaseData.facility.region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'CaseData.facilityType',
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: 'FacilityType.LABORATORY',
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
        label: 'facility',
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: 'FacilityType.LABORATORY',
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
        label: 'CaseData.healthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'CaseData.noneHealthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
];
