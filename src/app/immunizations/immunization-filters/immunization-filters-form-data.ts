import {
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  FORM_DATA_DATE,
  DateFilterOptions,
  NewCaseDateType,
} from '../../app.constants';
import { FORM_DATA_WIDGET } from '../../_constants/form-data';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const diseaseOptions = pipe.transform(Disease);
const dateFilterOptions = pipe.transform(DateFilterOptions);
const newCaseDateType = pipe.transform(NewCaseDateType);

export const FORM_DATA_IMMUNIZATION_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'caseLike',
        placeholder: 'strings.promptCasesSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'headingBirthdate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateYYYY',
        options: [],
        placeholder: 'captions.Person.birthdateYYYY',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateMM',
        options: [],
        placeholder: 'captions.Person.birthdateMM',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateDD',
        options: [],
        placeholder: 'captions.Person.birthdateDD',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'medicalAspect',
    title: 'headingMedicalAspects',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        placeholder: 'captions.disease',
        options: diseaseOptions,
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'adminAspect',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region',
            placeholder: 'captions.CaseData.responsibleRegion',
            newLine: true,
          },
          district: {
            key: 'district',
            placeholder: 'captions.CaseData.responsibleDistrict',
            newLine: true,
            dependingOn: 'region',
          },
          community: {
            key: 'community',
            placeholder: 'captions.CaseData.responsibleCommunity',
            newLine: true,
            dependingOn: 'district',
          },
        },
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.facility',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        placeholder: 'captions.facilityTypeGroup',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        placeholder: 'captions.CaseData.facilityType',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility',
        placeholder: 'captions.facility',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'headingDateFilter',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'dateFilterOption',
        options: dateFilterOptions,
        value: 'DATE',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'newCaseDateType',
        options: newCaseDateType,
        placeholder: 'strings.promptNewCaseDateType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'newCaseDateFrom',
        hint: 'strings.promptCasesDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'newCaseDateTo',
        hint: 'strings.promptDateTo',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        hint: 'captions.CaseData.quarantineTo',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntilTo',
        hint: 'captions.CaseData.followUpUntil',
        className: 'fullwidth',
      },
    ],
  },
];
