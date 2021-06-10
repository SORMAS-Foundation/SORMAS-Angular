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
    id: 'caseDaa',
    title: 'Case data',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'Case data',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'Date of report',
        key: 'reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'Disease',
        validation: ['required'],
        options: optionsDisease,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'Disease variant',
        options: optionsDisease,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: 'Epid number',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'Case origin',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'Responsible region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'Default region',
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'Responsible district',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'Default district',
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'Responsible community',
        options: [
          {
            key: 'default',
            value: 'Default community',
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
    title: 'Place of stay',
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
        label: 'Facility category region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'Default region',
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
        label: 'Facility type',
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: 'Laboratory',
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
        label: 'Facility name and description',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'Place description',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    id: 'person',
    title: 'Person information',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'First name',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'Last name',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'Date of birth',
        placeholder: 'Year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'Month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'Day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'Sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'Date of death',
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'Cause of death',
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'Responsible disease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'Death place type',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'Death place description',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'Health ID',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'Passport number',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: 'Phone number',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'Email',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'health',
    title: 'Health',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'Present condition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'Sympton onset',
        key: 'symptomOnset',
      },
    ],
  },
];
