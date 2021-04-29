import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { YesNoUnknown } from '../../../_models/models';
import { FORM_DATA_RADIO, FORM_DATA_WIDGET } from '../../../_constants/form-data';
import { ExposuresListComponent } from './exposures-list/exposures-list.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    title: 'Exposure investigation',
    subTitle:
      'Please document ALL relevant direct exposures (e.g. attended gatherings, travels, animal contacts, etc.) during the incubation period.',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: 'Exposure details known',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: ExposuresListComponent,
        label: 'Exposures',
        newLine: true,
      },
    ],
  },
  {
    title: 'Activity as case',
    subTitle: 'Please document ALL relevant activities after infection.',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.activityAsCaseDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: ActivitiesListComponent,
        newLine: true,
      },
    ],
  },
  {
    title: 'Incubation period',
    subTitle:
      'Please indicate if any of the following is relevant for the patient during the incubation period',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label:
          'Residing or working in an area with high risk of transmission of the disease e.g. colsed residential and camp-like settings',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label:
          'Residing or traveling to countries/territories/areas experiencing larger outbreaks of local transmission',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: 'Contacts with source case',
    subTitle:
      'Please indicate ALL contacts with potential source cases during the incubation period',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: 'Contactsh with source case known',
        options: optionsYesNoUnknown,
      },
    ],
  },
];
