import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  Disease,
  PlaceOfStay,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { Sex } from '../../_models/sex';
import { PresentCondition } from '../../_models/presentCondition';
import { CauseOfDeath } from '../../_models/causeOfDeath';
import { DeathPlaceType } from '../../_models/deathPlaceType';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);

export const FORM_DATA_CASE_ADD = [
  {
    id: 'caseData',
    title: 'headingCaseData',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'headingCaseData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'CaseData.reportDate',
        key: 'reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'disease',
        validation: ['required'],
        options: optionsDisease,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'CaseData.diseaseVariant',
        options: optionsDisease,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: 'CaseData.epidNumber',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'CaseData.caseOrigin',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'CaseData.responsibleRegion',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'CaseData.responsibleDistrict',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'CaseData.responsibleCommunity',
        options: [
          {
            key: 'default',
            value: 'defaultCommunity',
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
    ],
  },
  {
    id: 'placeOfStay',
    title: 'casePlaceOfStay',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        validation: ['required'],
        options: optionsPlaceOfStay,
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
  {
    id: 'person',
    title: 'headingPersonInformation',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'Person.birth',
        placeholder: 'year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'Person.dateOfDeath',
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'Person.causeOfDeath',
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'Person.causeOfDeathDisease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'Person.deathPlaceType',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'Person.deathPlaceDescription',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'Person.passportNumber',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: 'User.phone',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'User.userEmail',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'health',
    title: 'NewCaseHealth',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'PresentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'NewCaseDateType.ONSET',
        key: 'symptomOnset',
      },
    ],
  },
];
