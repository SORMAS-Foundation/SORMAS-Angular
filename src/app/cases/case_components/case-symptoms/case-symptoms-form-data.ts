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
    title: 'Clinical measurements',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperature',
        label: 'Max body temperature in °C',
        options: optionsTemperature,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperatureSource',
        label: 'Source',
        options: optionsTemperatureSource,
        className: 'size-small',
      },
    ],
  },
  {
    title: 'Clinical signs and sympotms',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-symptoms-group-select',
      },
    ],
  },
  {
    title: 'General',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.chillsSweats',
        label: 'Chills or sweats',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.headache',
        label: 'Headache',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fever',
        label: 'Fever',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.musclePain',
        label: 'Muscle pain',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.shivering',
        label: 'Shivering',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },

      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.feelingIll',
        label: 'Feeling ill',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: 'Respiratory',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.soreThroat',
        label: 'Sore throat',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.runnyNose',
        label: 'Runny nose',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.cough',
        label: 'Caugh',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.difficultyBreathing',
        label: 'Difficulty breathing / Dyspnea',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.rapidBreathing',
        label: 'Rapid breathing',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.pneumoniaClinicalOrRadiologic',
        label: 'Pneumonia (clinical or radiologic)',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.oxygenSaturationLower94',
        label: 'Oxygen saturation < 94%',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.respiratoryDiseaseVentilation',
        label: 'Respiratory disease requiring ventilation',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.acuteRespiratoryDistressSyndrome',
        label: 'Acute respiratory distress syndrome',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: 'Cardiovascular',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fastHeartRate',
        label: 'Fast hearth rate (Tachycardia)',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: 'Gastrointestinal',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.diarrhea',
        label: 'Diarrhea',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.nausea',
        label: 'Nausea',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: 'Other',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfSmell',
        label: 'New loss of smell',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfTaste',
        label: 'New loss of taste',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: 'Other clinical symptoms',
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.otherComplicationsText',
        label: 'Specify other symptoms',
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'symptoms.otherComplications',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
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
        label: 'First symptom',
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
