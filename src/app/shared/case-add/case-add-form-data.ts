import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  CauseOfDeath,
  DeathPlaceType,
  Disease,
  PlaceOfStay,
  PresentCondition,
  Sex,
} from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_WIDGET } from '../../_constants/form-data';

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
    title: 'strings.headingCaseData',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'strings.headingCaseData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.CaseData.reportDate',
        key: 'reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        validation: ['required'],
        options: optionsDisease,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'captions.CaseData.diseaseVariant',
        options: optionsDisease,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: 'captions.CaseData.epidNumber',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'captions.CaseData.caseOrigin',
    required: true,
    fields: [
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
        ...FORM_DATA_INPUT,
        key: 'community.uuid',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'size-large',
        widgetInfo: {
          region: {
            key: 'region.uuid',
            required: true,
            label: 'captions.CaseData.responsibleRegion',
            newLine: true,
          },
          district: {
            key: 'district.uuid',
            required: true,
            label: 'captions.CaseData.responsibleDistrict',
            newLine: true,
            dependingOn: 'region',
          },
          community: {
            key: 'community.uuid',
            label: 'captions.CaseData.responsibleCommunity',
            newLine: true,
            dependingOn: 'district',
          },
        },
      },
    ],
  },
  {
    id: 'placeOfStay',
    title: 'captions.casePlaceOfStay',
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
        label: 'captions.facilityTypeGroup',
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
        label: 'captions.CaseData.facilityType',
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
  {
    id: 'person',
    title: 'strings.headingPersonInformation',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'captions.sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'captions.Person.deathDate',
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'captions.Person.causeOfDeath',
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'captions.Person.causeOfDeathDisease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'captions.Person.deathPlaceType',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'captions.Person.deathPlaceDescription',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: 'captions.User.phone',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.User.userEmail',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'health',
    title: 'headingHealth',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'captions.Person.presentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'captions.Symptoms.onsetDate',
        key: 'symptomOnset',
      },
    ],
  },
];
