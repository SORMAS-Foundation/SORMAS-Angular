import {
  FORM_DATA_RADIO,
  FORM_DATA_DATE,
  FORM_DATA_SELECT,
  FORM_DATA_INPUT,
  YesNoUnknown,
  TemperatureSource,
} from '../../../app.constants';
import { FORM_DATA_WIDGET } from '../../../_constants/form-data';

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
const optionsTemperatureSource = pipe.transform(TemperatureSource);
const optionsTemperature = range(35, 44.1, 0.1).map((val) => ({
  key: Number(val.toFixed(1)),
  value: `${val.toFixed(1)} °C`,
}));

export const FORM_DATA_CASE_SYMPTOMS = [
  {
    id: 'measurements',
    title: 'headingClinicalMeasurements',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperature',
        label: 'symptomsMaxTemperature',
        options: optionsTemperature,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperatureSource',
        label: 'Symptoms.temperatureSource',
        options: optionsTemperatureSource,
        className: 'size-small',
      },
    ],
  },
  {
    id: 'symptoms',
    title: 'headingSignsAndSymptoms',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-symptoms-group-select',
      },
    ],
  },
  {
    id: 'general',
    title: 'SymptomGroup.GENERAL',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.chillsSweats',
        label: 'Symptoms.chillsSweats',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.headache',
        label: 'Symptoms.headache',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fever',
        label: 'Symptoms.fever',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.musclePain',
        label: 'Symptoms.musclePain',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.shivering',
        label: 'Symptoms.shivering',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },

      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.feelingIll',
        label: 'Symptoms.feelingIll',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'respiratory',
    title: 'SymptomGroup.RESPIRATORY',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.soreThroat',
        label: 'Symptoms.soreThroat',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.runnyNose',
        label: 'Symptoms.runnyNose',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.cough',
        label: 'Symptoms.cough',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.difficultyBreathing',
        label: 'Symptoms.difficultyBreathing',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.rapidBreathing',
        label: 'Symptoms.rapidBreathing',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.pneumoniaClinicalOrRadiologic',
        label: 'Symptoms.pneumoniaClinicalOrRadiologic',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.oxygenSaturationLower94',
        label: 'Symptoms.oxygenSaturationLower94',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.respiratoryDiseaseVentilation',
        label: 'Symptoms.respiratoryDiseaseVentilation',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.acuteRespiratoryDistressSyndrome',
        label: 'Symptoms.acuteRespiratoryDistressSyndrome',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'cardiovascular',
    title: 'SymptomGroup.CARDIOVASCULAR',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fastHeartRate',
        label: 'Symptoms.fastHeartRate',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'gastrointestinal',
    title: 'SymptomGroup.GASTROINTESTINAL',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.diarrhea',
        label: 'Symptoms.diarrhea',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.nausea',
        label: 'Symptoms.nausea',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'other',
    title: 'SymptomGroup.OTHER',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfSmell',
        label: 'Symptoms.lossOfSmell',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfTaste',
        label: 'Symptoms.lossOfTaste',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: 'Symptoms.otherNonHemorrhagicSymptoms',
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.otherComplicationsText',
        label: 'Symptoms.otherNonHemorrhagicSymptomsText',
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'symptoms.otherComplications',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    // // translate-bug
    id: 'details',
    title: 'Additional details',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.symptomsComments',
        label: 'Comments',
        options: optionsYesNoUnknown,
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.onsetSymptom',
        label: 'Symptoms.firstSymptom',
        options: [],
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'symptoms.onsetDate',
        label: 'Date of symptom onset',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
];
