import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
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
    title: _('Clinical measurements'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperature',
        label: _('Max body temperature in °C'),
        options: optionsTemperature,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperatureSource',
        label: _('Source'),
        options: optionsTemperatureSource,
        className: 'size-small',
      },
    ],
  },
  {
    title: _('Clinical signs and sympotms'),
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-symptoms-group-select',
      },
    ],
  },
  {
    title: _('General'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.chillsSweats',
        label: _('Chills or sweats'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.headache',
        label: _('Headache'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fever',
        label: _('Fever'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.musclePain',
        label: _('Muscle pain'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.shivering',
        label: _('Shivering'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },

      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.feelingIll',
        label: _('Feeling ill'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: _('Respiratory'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.soreThroat',
        label: _('Sore throat'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.runnyNose',
        label: _('Runny nose'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.cough',
        label: _('Caugh'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.difficultyBreathing',
        label: _('Difficulty breathing / Dyspnea'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.rapidBreathing',
        label: _('Rapid breathing'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.pneumoniaClinicalOrRadiologic',
        label: _('Pneumonia (clinical or radiologic)'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.oxygenSaturationLower94',
        label: _('Oxygen saturation < 94%'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.respiratoryDiseaseVentilation',
        label: _('Respiratory disease requiring ventilation'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.acuteRespiratoryDistressSyndrome',
        label: _('Acute respiratory distress syndrome'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: _('Cardiovascular'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fastHeartRate',
        label: _('Fast hearth rate (Tachycardia)'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: _('Gastrointestinal'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.diarrhea',
        label: _('Diarrhea'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.nausea',
        label: _('Nausea'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    title: _('Other'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfSmell',
        label: _('New loss of smell'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfTaste',
        label: _('New loss of taste'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: _('Other clinical symptoms'),
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.otherComplicationsText',
        label: _('Specify other symptoms'),
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'symptoms.otherComplications',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    // // translate-bug
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
        label: _('Date of symptom onset'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
];
