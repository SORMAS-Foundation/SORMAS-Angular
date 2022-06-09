import {
  FORM_DATA_RADIO,
  FORM_DATA_DATE,
  FORM_DATA_SELECT,
  FORM_DATA_INPUT,
  FORM_DATA_WIDGET,
  YesNoUnknown,
  TemperatureSource,
  FORM_DATA_DATETIME,
  CaseFollowupStatus,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const range = (start: number, end: number, step = 1) => {
  const output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsAvailability = pipe.transform(CaseFollowupStatus);
const optionsTemperatureSource = pipe.transform(TemperatureSource);
const optionsTemperature = range(35, 44.1, 0.1).map((val) => ({
  key: Number(val.toFixed(1)),
  value: `${val.toFixed(1)} °C`,
}));

export const FORM_DATA_CASE_FOLLOW_UP_NEW_VISITS = [
  {
    id: 'details',
    title: 'visitDeatiles',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'availability',
        label: 'symptoms.availability',
        options: optionsAvailability,
        required: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'visitDateTime',
        label: 'captions.Visit.visitDateTime',
        value: new Date(),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'visitRemarks',
        label: 'captions.Visit.visitRemarks',
      },
    ],
  },
  {
    id: 'measurements',
    title: 'strings.headingClinicalMeasurements',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperature',
        label: 'captions.symptomsMaxTemperature',
        options: optionsTemperature,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperatureSource',
        label: 'captions.Symptoms.temperatureSource',
        options: optionsTemperatureSource,
        className: 'size-small',
      },
    ],
  },
  {
    id: 'symptoms',
    title: 'strings.headingSignsAndSymptoms',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-add-visits-group-select',
      },
    ],
  },
  {
    id: 'general',
    title: 'enum.SymptomGroup.GENERAL',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.chillsSweats',
        label: 'captions.Symptoms.chillsSweats',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.headache',
        label: 'captions.Symptoms.headache',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fever',
        label: 'captions.Symptoms.fever',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.musclePain',
        label: 'captions.Symptoms.musclePain',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.shivering',
        label: 'captions.Symptoms.shivering',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },

      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.feelingIll',
        label: 'captions.Symptoms.feelingIll',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'respiratory',
    title: 'enum.SymptomGroup.RESPIRATORY',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.soreThroat',
        label: 'captions.Symptoms.soreThroat',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.runnyNose',
        label: 'captions.Symptoms.runnyNose',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.cough',
        label: 'captions.Symptoms.cough',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.difficultyBreathing',
        label: 'captions.Symptoms.difficultyBreathing',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.rapidBreathing',
        label: 'captions.Symptoms.rapidBreathing',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.pneumoniaClinicalOrRadiologic',
        label: 'captions.Symptoms.pneumoniaClinicalOrRadiologic',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.oxygenSaturationLower94',
        label: 'captions.Symptoms.oxygenSaturationLower94',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.respiratoryDiseaseVentilation',
        label: 'captions.Symptoms.respiratoryDiseaseVentilation',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.acuteRespiratoryDistressSyndrome',
        label: 'captions.Symptoms.acuteRespiratoryDistressSyndrome',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'gastroIntestinal',
    title: 'enum.SymptomGroup.GASTROINTESTINAL',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.abdominalPain',
        label: 'captions.Symptoms.abdominalPain',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.diarrhea',
        label: 'captions.Symptoms.diarrhea',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.nausea',
        label: 'captions.Symptoms.nausea',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.vomiting',
        label: 'captions.Symptoms.vomiting',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'skin',
    title: 'enum.SymptomGroup.SKIN',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.skinUlcers',
        label: 'captions.Symptoms.skinUlcers',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'other',
    title: 'enum.SymptomGroup.OTHER',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfSmell',
        label: 'captions.Symptoms.lossOfSmell',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfTaste',
        label: 'captions.Symptoms.lossOfTaste',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: 'captions.Symptoms.otherNonHemorrhagicSymptoms',
        options: optionsYesNoUnknown,
        newLine: true,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.otherComplicationsText',
        label: 'captions.Symptoms.otherNonHemorrhagicSymptomsText',
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'symptoms.otherComplications',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'complications',
    title: 'strings.headingComplications',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.confusedDisoriented',
        label: 'captions.Symptoms.confusedDisoriented',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.seizures',
        label: 'captions.Symptoms.seizures',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: 'captions.Symptoms.otherComplications',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'details',
    title: 'headingAdditionalDetails',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.symptomsComments',
        label: 'captions.Symptoms.symptomsComments',
        options: optionsYesNoUnknown,
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.onsetSymptom',
        label: 'captions.Symptoms.firstSymptom',
        options: [],
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'symptoms.onsetDate',
        label: 'captions.Symptoms.symptomOnset',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
];
