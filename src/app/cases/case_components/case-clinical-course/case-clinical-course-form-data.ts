import { FORM_DATA_RADIO, YesNoUnknown } from '../../../app.constants';
import { FORM_DATA_TEXTAREA } from '../../../_constants/form-data';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_CLINICAL_COURSE = [
  {
    id: 'conditions',
    title: 'headingHealthConditions',
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.cardiovascularDiseaseIncludingHypertension',
        key: 'clinicalCourse.healthConditions.cardiovascularDiseaseIncludingHypertension',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.chronicKidneyDisease',
        key: 'clinicalCourse.healthConditions.chronicKidneyDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.malignancyChemotherapy',
        key: 'clinicalCourse.healthConditions.malignancyChemotherapy',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.diabetes',
        key: 'clinicalCourse.healthConditions.diabetes',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.chronicLiverDisease',
        key: 'clinicalCourse.healthConditions.chronicLiverDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.chronicPulmonaryDisease',
        key: 'clinicalCourse.healthConditions.chronicPulmonaryDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'HealthConditions.chronicNeurologicCondition',
        key: 'clinicalCourse.healthConditions.chronicNeurologicCondition',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: 'HealthConditions.otherConditions',
        key: 'clinicalCourse.healthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
