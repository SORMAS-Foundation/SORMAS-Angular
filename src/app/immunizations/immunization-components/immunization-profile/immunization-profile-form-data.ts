import {
  FORM_DATA_DATE,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

export const FORM_DATA_IMMUNIZATION_PROFILE = [
  {
    id: 'reportDate',
    title: 'captions.CaseData.reportDate',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'strings.headingCaseData',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        validation: ['required'],
      },
    ],
  },
];
