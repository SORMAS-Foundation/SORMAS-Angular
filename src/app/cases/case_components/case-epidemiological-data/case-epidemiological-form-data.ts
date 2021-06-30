import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_RADIO, FORM_DATA_WIDGET, YesNoUnknown } from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    id: 'exposureInvestigation',
    title: 'headingExposureInvestigation',
    subTitle: 'infoExposureInvestigation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: 'EpiData.exposureDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exposures-list',
        label: 'EpiData.exposures',
        newLine: true,
      },
    ],
  },
  {
    id: 'activity',
    title: 'EpiData.activitiesAsCase',
    subTitle: 'infoActivityAsCaseInvestigation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.activityAsCaseDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-activities-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'incubation',
    title: 'EpiData.incubationPeriod',
    subTitle: 'infoEpiDataFieldsHint',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label: 'EpiData.highTransmissionRiskArea',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label: 'EpiData.largeOutbreaksArea',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'contacts',
    title: 'EpiData.contactWithSourceCase',
    subTitle: 'infoEpiDataSourceCaseContacts',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: 'EpiData.contactWithSourceCaseKnown',
        options: optionsYesNoUnknown,
      },
    ],
  },
];
