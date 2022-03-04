import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_CHECKBOX,
  PointOfEntryType,
  Disease,
  Sex,
  Presentcondition,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const entryPointTypeOptions = pipe.transform(PointOfEntryType);
const optionsSex = pipe.transform(Sex);
const diseaseOptions = pipe.transform(Disease);
const optionsPresentCondition = pipe.transform(Presentcondition);

export const FORM_DATA_ENTRY_ADD = [
  {
    id: 'travelEntryData',
    title: 'strings.headingTravelEntryData',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        label: 'captions.TravelEntry.reportDate',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        options: diseaseOptions,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.caption',
        label: 'captions.TravelEntry.diseaseVariant',
        options: [],
        dependingOn: 'disease',
        dependingOnValues: ['CORONAVIRUS'],
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
        determinedBy: ['region.uuid'],
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.TravelEntry.responsibleCommunity',
        service: 'communityService',
        determinedBy: ['district.uuid'],
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
        determinedBy: ['region.uuid'],
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
    id: 'personInfo',
    title: 'strings.headingPersonInformation',
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
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-medium',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
        className: 'size-medium',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: 'captions.User.phone',
        className: 'size-medium',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.User.userEmail',
        className: 'size-medium',
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
