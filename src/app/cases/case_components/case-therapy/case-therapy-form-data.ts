import { FORM_DATA_WIDGET } from '../../../_constants/form-data';

export const FORM_DATA_CASE_THERAPY_PRESCRIPTIONS = [
  {
    id: 'prescriptions',
    title: 'strings.entityPrescriptions',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-prescriptions-list',
      },
    ],
  },
];

export const FORM_DATA_CASE_THERAPY_TREATMENTS = [
  {
    id: 'treatments',
    title: 'strings.entityTreatments',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-treatments-list',
      },
    ],
  },
];
