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
    id: 'measurements',
    title: _('headingClinicalMeasurements'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperature',
        label: _('symptomsMaxTemperature'),
        options: optionsTemperature,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'symptoms.temperatureSource',
        label: _('Symptoms.temperatureSource'),
        options: optionsTemperatureSource,
        className: 'size-small',
      },
    ],
  },
  {
    id: 'symptoms',
    title: _('headingSignsAndSymptoms'),
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-symptoms-group-select',
      },
    ],
  },
  {
    id: 'general',
    title: _('SymptomGroup.GENERAL'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.chillsSweats',
        label: _('Symptoms.chillsSweats'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.headache',
        label: _('Symptoms.headache'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fever',
        label: _('Symptoms.fever'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.musclePain',
        label: _('Symptoms.musclePain'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.shivering',
        label: _('Symptoms.shivering'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },

      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.feelingIll',
        label: _('Symptoms.feelingIll'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'respiratory',
    title: _('SymptomGroup.RESPIRATORY'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.soreThroat',
        label: _('Symptoms.soreThroat'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.runnyNose',
        label: _('Symptoms.runnyNose'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.cough',
        label: _('Symptoms.cough'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.difficultyBreathing',
        label: _('Symptoms.difficultyBreathing'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.rapidBreathing',
        label: _('Symptoms.rapidBreathing'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.pneumoniaClinicalOrRadiologic',
        label: _('Symptoms.pneumoniaClinicalOrRadiologic'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.oxygenSaturationLower94',
        label: _('Symptoms.oxygenSaturationLower94'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.respiratoryDiseaseVentilation',
        label: _('Symptoms.respiratoryDiseaseVentilation'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.acuteRespiratoryDistressSyndrome',
        label: _('Symptoms.acuteRespiratoryDistressSyndrome'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'cardiovascular',
    title: _('SymptomGroup.CARDIOVASCULAR'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.fastHeartRate',
        label: _('Symptoms.fastHeartRate'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'gastrointestinal',
    title: _('SymptomGroup.GASTROINTESTINAL'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.diarrhea',
        label: _('Symptoms.diarrhea'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.nausea',
        label: _('Symptoms.nausea'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'other',
    title: _('SymptomGroup.OTHER'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfSmell',
        label: _('Symptoms.lossOfSmell'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.lossOfTaste',
        label: _('Symptoms.lossOfTaste'),
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'symptoms.otherComplications',
        label: _('Symptoms.otherNonHemorrhagicSymptoms'),
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'symptoms.otherComplicationsText',
        label: _('Symptoms.otherNonHemorrhagicSymptomsText'),
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
        label: _('Symptoms.firstSymptom'),
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
