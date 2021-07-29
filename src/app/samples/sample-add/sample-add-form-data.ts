import {
  Disease,
  PathogenTestResultType,
  PathogenTestType,
  SampleMaterial,
  SamplePurpose,
  SamplingReason,
  SpecimenCondition,
} from '../../_constants/enums';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_DATETIME,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
} from '../../_constants/form-data';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const optionsSamplePurpose = pipe.transform(SamplePurpose);
const optionsSampleTypes = pipe.transform(SampleMaterial);
const optionsSampleReasons = pipe.transform(SamplingReason);
const optionsLab = pipe.transform(['lab1', 'lab2']);
const optionsSpecimenCondition = pipe.transform(SpecimenCondition);
const optionsPathogenTestResult = pipe.transform(PathogenTestResultType);
const optionsPathogenTestType = pipe.transform(PathogenTestType);
const optionsDisease = pipe.transform(Disease);
const optionsDiseaseVariant = pipe.transform(['Variant1', 'Variant2']);

export const FORM_DATA_SAMPLE_ADD = [
  {
    id: 'purpose',
    title: 'captions.Sample.samplePurpose',
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
    id: 'sample',
    title: 'captions.Sample',
    required: true,
    fields: [
      {
        ...FORM_DATA_DATETIME,
        label: 'captions.LabMessage.sampleDateTime',
        key: 'sampleDateTime',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sampleMaterial',
        label: 'captions.Sample.sampleMaterial',
        validation: ['required'],
        options: optionsSampleTypes,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sampleMaterialText',
        label: 'captions.Sample.sampleMaterialText',
        dependingOn: 'sampleMaterial',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'samplingReason',
        label: 'captions.Sample.samplingReason',
        validation: ['required'],
        options: optionsSampleReasons,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'samplingReasonDetails',
        label: 'captions.Sample.samplingReasonDetails',
        dependingOn: 'samplingReason',
        dependingOnValues: ['OTHER_REASON'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fieldSampleID',
        label: 'captions.Sample.fieldSampleID',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'lab',
        label: 'captions.Sample.lab',
        options: optionsLab,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labDetails',
        label: 'captions.Sample.labDetails',
        dependingOn: 'lab',
      },
    ],
  },
  {
    id: 'dispatched',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'shipped',
        label: 'captions.Sample.shipped',
      },
      {
        ...FORM_DATA_DATE,
        key: 'shipmentDate',
        label: 'captions.Sample.shipmentDate',
        validation: ['required'],
        newLine: true,
        dependingOn: 'shipped',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'shipmentDetails',
        label: 'captions.Sample.shipmentDetails',
        dependingOn: 'shipped',
      },
    ],
  },
  {
    id: 'received',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'received',
        label: 'captions.Sample.received',
      },
      {
        ...FORM_DATA_DATE,
        key: 'receivedDate',
        label: 'captions.Sample.receivedDate',
        validation: ['required'],
        newLine: true,
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labSampleID',
        label: 'captions.Sample.labSampleID',
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'specimenCondition',
        label: 'captions.Sample.specimenCondition',
        options: optionsSpecimenCondition,
        newLine: true,
        validation: ['required'],
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'noTestPossibleReason',
        label: 'captions.Sample.noTestPossibleReason',
        validation: ['required'],
        dependingOn: 'specimenCondition',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'comment',
        label: 'captions.Sample.comment',
        className: 'size-full',
        dependingOn: 'received',
      },
    ],
  },
  {
    id: 'testResult',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'referred',
        label: 'captions.sampleIncludeTestOnCreation',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pathogenTestResult',
        label: 'captions.PathogenTest.testResult',
        options: optionsPathogenTestResult,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTime',
        label: 'captions.PathogenTest.reportDate',
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'viaLims',
        label: 'captions.PathogenTest.viaLims',
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'requestedPathogenTests',
        label: 'captions.Sample.typeOfTest',
        options: optionsPathogenTestType,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'testedDisease',
        label: 'captions.PathogenTest.testedDisease',
        options: optionsDisease,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'testedDiseaseVariant',
        label: 'captions.PathogenTest.testedDiseaseVariant',
        options: optionsDiseaseVariant,
        dependingOn: 'testedDisease',
        dependingOnValues: ['CORONAVIRUS'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'testedDiseaseDetails',
        label: 'captions.PathogenTest.testedDiseaseDetails',
        dependingOn: 'testedDisease',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'testResultVerified',
        label: 'captions.PathogenTest.testResultVerified',
        dependingOn: 'referred',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'testDateTime',
        label: 'captions.PathogenTest.testDateTime',
        validation: ['required'],
        newLine: true,
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'resultDetails',
        label: 'captions.PathogenTest.testResultText',
        className: 'size-full',
        dependingOn: 'referred',
      },
    ],
  },
];
