import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { FORM_DATA_RADIO, YesNoUnknown } from '../../../app.constants';
import { FORM_DATA_TEXTAREA } from '../../../_constants/form-data';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_CLINICAL_COURSE = [
  {
    id: 'conditions',
    title: _('Pre-existing conditions'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: _('Cardiovascular disease, including hypertension'),
        key: 'clinicalCourse.healthConditions.cardiovascularDiseaseIncludingHypertension',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Renal disease'),
        key: 'clinicalCourse.healthConditions.chronicKidneyDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Malignancy'),
        key: 'clinicalCourse.healthConditions.malignancyChemotherapy',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Diabetes'),
        key: 'clinicalCourse.healthConditions.diabetes',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Liver disease'),
        key: 'clinicalCourse.healthConditions.chronicLiverDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Chronic pulmonary disease'),
        key: 'clinicalCourse.healthConditions.chronicPulmonaryDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: _('Chronic neurological/ neuromuscular disease'),
        key: 'clinicalCourse.healthConditions.chronicNeurologicCondition',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: _('Additional relevant pre-existing conditions'),
        key: 'clinicalCourse.healthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
