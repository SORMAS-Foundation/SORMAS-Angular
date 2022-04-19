import {
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  Disease,
  FORM_DATA_DATE,
  NewCaseDateType,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const diseaseOptions = pipe.transform(Disease);
const newCaseDateType = pipe.transform(NewCaseDateType);

export const FORM_DATA_MERGE_DUPLICATE_FILTERS = [
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
    id: 'creationDate',
    title: 'captions.creationDate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'creationDateFrom',
        hint: 'captions.from',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'creationDateTo',
        hint: 'captions.to',
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
    id: 'events',
    title: 'strings.entityEvents',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'searchEvents',
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
        ...FORM_DATA_INPUT,
        key: 'reportingUser',
        placeholder: 'captions.reportingUser',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        newLine: true,
        label: 'captions.CaseData.responsibleRegion',
        service: 'regionService',
        className: 'fullwidth',
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
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'reportDate',
    title: 'captions.caseNewCaseDate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'newCaseDateType',
        options: newCaseDateType,
        placeholder: 'strings.promptNewCaseDateType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateFrom',
        hint: 'strings.promptCasesDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTo',
        hint: 'captions.to',
        className: 'fullwidth',
      },
    ],
  },
];
