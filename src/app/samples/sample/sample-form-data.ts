import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
  FORM_DATA_MULTISELECT,
  FORM_DATA_RADIO,
  AdditionalTestType,
  PathogenTestType,
  PathogenTestResultType,
  SamplePurpose,
  SamplingReason,
  SpecimenCondition,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_CHECKBOX, FORM_DATA_TEXTAREA } from '../../_constants/form-data';

const pipe = new EnumToKeyValuePipe();

const optionsSamplePurpose = pipe.transform(SamplePurpose);
const optionsSamplingReason = pipe.transform(SamplingReason);
const optionsPathogenTests = pipe.transform(PathogenTestType);
const optionsAdditionalTests = pipe.transform(AdditionalTestType);
const optionsSpecimenCondition = pipe.transform(SpecimenCondition);
const optionsPathogenTestResultType = pipe.transform(PathogenTestResultType);

export const FORM_DATA_PERSON = [
  {
    id: 'sampleId',
    title: 'Sample ID',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
      },
    ],
  },
  {
    id: 'reporter',
    title: 'Reporting user',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'reportingUser.uuid',
      },
    ],
  },
  {
    id: 'purpose',
    title: 'Purose of the sample',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'samplePurpose',
        options: optionsSamplePurpose,
      },
    ],
  },
  {
    id: 'sampleDetails',
    title: 'Sample',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'sampleDateTime',
        require: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sampleMaterial',
        label: 'Type of sample',
        require: true,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fieldSampleID',
        label: 'Sample ID',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'lab.caption',
        label: 'Laboratory',
        options: [
          {
            key: 'default',
            value: 'Default',
          },
        ],
        require: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labDetails',
        label: 'Laboratory name & description',
        dependingOn: 'lab.caption',
        dependingOnValues: ['OTHER_FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'samplingReason',
        label: 'Reason for sampling / testing',
        options: optionsSamplingReason,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'samplingReasonDetails',
        label: 'Sampling reason details',
      },
    ],
  },
  {
    id: 'tests',
    title: 'Tests',
    subTitle: 'Please select every type of test you want to be performed for sample',
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'requestedPathogenTests',
        label: 'Pathogen tests',
        placeholder: 'Search by pathogen test...',
        options: optionsPathogenTests,
        chips: true,
        className: 'size-auto',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'requestedOtherPathogenTests',
        label: 'Other pathogen tests',
        newLine: true,
      },
      {
        ...FORM_DATA_MULTISELECT,
        key: 'requestedAdditionalTests',
        label: 'Additional tests',
        placeholder: 'Search by additional test...',
        options: optionsAdditionalTests,
        chips: true,
        newLine: true,
        className: 'size-auto',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'requestedOtherAdditionalTests',
        label: 'Other additional tests',
        newLine: true,
      },
    ],
  },
  {
    id: 'shipment',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'shipped',
        label: 'Sent / dispatched',
      },
      {
        ...FORM_DATA_DATE,
        key: 'shipmentDate',
        label: 'Date sample was sent',
        require: true,
        newLine: true,
        dependingOn: 'shipped',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'shipmentDetails',
        label: 'Dispatched details',
        dependingOn: 'shipped',
      },
    ],
  },
  {
    id: 'receivement',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'received',
        label: 'Received',
      },
      {
        ...FORM_DATA_DATE,
        key: 'receivedDate',
        label: 'Date sample received at lab',
        require: true,
        newLine: true,
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labSampleID',
        label: 'Lab sample ID',
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'specimenCondition',
        label: 'Specimen condition',
        options: optionsSpecimenCondition,
        require: true,
        newLine: true,
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'noTestPossibleReason',
        label: 'Reason',
        require: true,
        dependingOn: 'specimenCondition',
        dependingOnValues: ['NOTADEQUATE'],
      },
    ],
  },
  {
    id: 'result',
    title: 'Rasult',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'comment',
        label: 'Comment',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pathogenTestResult',
        label: 'Final result',
        options: optionsPathogenTestResultType,
        newLine: true,
      },
    ],
  },
];
