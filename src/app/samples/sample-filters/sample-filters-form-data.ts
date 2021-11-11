import {
  FORM_DATA_RADIO,
  EntityRelevanceStatusOptions,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  FORM_DATA_DATE,
  SampleAssociationType,
  PathogenTestResultType,
  SpecimenCondition,
  CaseClassification,
  DateFilterOptions,
} from '../../app.constants';
import { FORM_DATA_WIDGET } from '../../_constants/form-data';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const associationTypeOptions = pipe.transform(SampleAssociationType);
const pathogenTestResultOptions = pipe.transform(PathogenTestResultType);
const specimenConditionOptions = pipe.transform(SpecimenCondition);
const relevanceStatusOptions = pipe.transform(EntityRelevanceStatusOptions);
const caseClassificationOptions = pipe.transform(CaseClassification);
const diseaseOptions = pipe.transform(Disease);
const dateFilterOptions = pipe.transform(DateFilterOptions);

export const FORM_DATA_SAMPLE_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'caseCodeIdLike',
        placeholder: 'strings.promptSamplesSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'samples',
    title: 'captions.Sample',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [],
  },
  {
    id: 'relevance',
    title: 'Sample.status',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: relevanceStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'type',
    title: 'captions.sampleAssociationType',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'sampleAssociationType',
        options: associationTypeOptions,
        separated: true,
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
        key: 'pathogenTestResult',
        placeholder: 'captions.Sample.testResult',
        options: pathogenTestResultOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'specimenCondition',
        placeholder: 'captions.Sample.specimenCondition',
        options: specimenConditionOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'caseClassification',
        placeholder: 'captions.Sample.caseClassification',
        options: caseClassificationOptions,
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        placeholder: 'captions.Sample.diseaseShort',
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
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region',
            placeholder: 'Sample.responsibleRegion',
            className: 'size-full',
          },
          district: {
            key: 'district',
            placeholder: 'Sample.responsibleDistrict',
            className: 'size-full',
            dependingOn: 'region',
          },
        },
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratory',
        placeholder: 'captions.Sample.lab',
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
        ...FORM_DATA_DATE,
        key: 'sampleReportDateFrom',
        hint: 'strings.promptSampleDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'sampleReportDateTo',
        hint: 'strings.promptSampleDateTo',
        className: 'fullwidth',
      },
    ],
  },
];
