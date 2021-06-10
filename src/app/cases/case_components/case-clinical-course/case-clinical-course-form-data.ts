import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { FORM_DATA_RADIO, YesNoUnknown } from '../../../app.constants';
import { FORM_DATA_TEXTAREA } from '../../../_constants/form-data';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_CLINICAL_COURSE = [
  {
    id: 'conditions',
    title: _('headingHealthConditions'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.cardiovascularDiseaseIncludingHypertension'),
        key: 'clinicalCourse.healthConditions.cardiovascularDiseaseIncludingHypertension',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.chronicKidneyDisease'),
        key: 'clinicalCourse.healthConditions.chronicKidneyDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.malignancyChemotherapy'),
        key: 'clinicalCourse.healthConditions.malignancyChemotherapy',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.diabetes'),
        key: 'clinicalCourse.healthConditions.diabetes',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.chronicLiverDisease'),
        key: 'clinicalCourse.healthConditions.chronicLiverDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.chronicPulmonaryDisease'),
        key: 'clinicalCourse.healthConditions.chronicPulmonaryDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('HealthConditions.chronicNeurologicCondition'),
        key: 'clinicalCourse.healthConditions.chronicNeurologicCondition',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: _('HealthConditions.otherConditions'),
        key: 'clinicalCourse.healthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
