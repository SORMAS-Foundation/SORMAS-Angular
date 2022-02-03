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
  CaseOrigin,
  FORM_DATA_CHECKBOX,
  PointOfEntryType,
  FORM_DATA_WIDGET,
  AreaType,
} from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);
const optionsCaseOrigin = pipe.transform(CaseOrigin);
const optionsPointOfEntryType = pipe.transform(PointOfEntryType);
const optionsAreaTypes = pipe.transform(AreaType);

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
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: 'captions.CaseData.epidNumber',
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
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'diseaseDetails',
        label: 'captions.diseaseVariantDetails',
        newLine: true,
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'captions.CaseData.caseOrigin',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseOrigin',
        validation: ['required'],
        options: optionsCaseOrigin,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pointOfEntryDiffer',
        label: 'captions.CaseData.differentPointOfEntryJurisdiction',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'regionPointOfEntry.uuid',
        label: 'captions.CaseData.pointOfEntryRegion',
        service: 'regionService',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'districtPointOfEntry.uuid',
        label: 'captions.CaseData.pointOfEntryDistrict',
        service: 'districtService',
        determinedBy: 'regionPointOfEntry.uuid',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry.uuid',
        label: 'captions.pointOfEntry',
        options: optionsPointOfEntryType,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'pointOfEntryDetails',
        label: 'pointOfEntryDetails',
      },
    ],
  },
  {
    id: 'responsibleJurisdiction',
    title: 'strings.headingResponsibleJurisdiction',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.CaseData.responsibleRegion',
        service: 'regionService',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.CaseData.responsibleDistrict',
        service: 'districtService',
        determinedBy: 'region.uuid',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.CaseData.responsibleCommunity',
        service: 'communityService',
        determinedBy: 'district.uuid',
        newLine: true,
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
  {
    id: 'address',
    title: 'captions.User.address',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-address-button',
        className: 'push-right',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.street',
        label: 'captions.Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.city',
        label: 'captions.Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.houseNumber',
        label: 'captions.Facility.houseNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'location.areaType',
        label: 'captions.Facility.areaType',
        options: optionsAreaTypes,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.postalCode',
        label: 'captions.Facility.postalCode',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.additionalInformation',
        label: 'captions.Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'headingGps',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
        className: 'push-right',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.latitude',
        label: 'captions.Location.latitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.longitude',
        label: 'captions.Location.longitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.latLonAccuracy',
        label: 'captions.Location.latLonAccuracy',
        className: 'size-small',
      },
    ],
  },
  {
    id: 'communityContact',
    title: 'captions.Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'communityContactPerson',
        label: 'captions.Location.details',
      },
    ],
  },
];
