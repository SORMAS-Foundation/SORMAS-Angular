import {
  Disease,
  CaseOutcome,
  CaseClassification,
  UserRole,
  FORM_DATA_MULTISELECT,
} from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsCaseClassification = pipe.transform(CaseClassification);
const optionsCaseOutcome = pipe.transform(CaseOutcome);
const optionsUserRole = pipe.transform(UserRole);

export const FORM_DATA_STATISTICS_FILTERS_CASE: FormBase<any>[] = [
  {
    id: 'disease',
    title: 'enum.StatisticsCaseAttribute.DISEASE',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'diseases',
        label: 'enum.StatisticsCaseAttribute.DISEASE',
        options: optionsDisease,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
  {
    id: 'classification',
    title: 'enum.StatisticsCaseAttribute.CLASSIFICATION',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'classifications',
        label: 'enum.StatisticsCaseAttribute.CLASSIFICATION',
        options: optionsCaseClassification,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
  {
    id: 'outcome',
    title: 'enum.StatisticsCaseAttribute.OUTCOME',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'outcomes',
        label: 'enum.StatisticsCaseAttribute.OUTCOME',
        options: optionsCaseOutcome,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
  {
    id: 'userrole',
    title: 'enum.StatisticsCaseAttribute.REPORTING_USER_ROLE',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'reportingUserRoles',
        label: 'enum.StatisticsCaseAttribute.REPORTING_USER_ROLE',
        options: optionsUserRole,
        chips: true,
        allowClear: true,
        allowSelect: true,
        newLine: true,
      },
    ],
  },
];
