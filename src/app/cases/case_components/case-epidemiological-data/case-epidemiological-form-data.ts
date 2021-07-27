import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_RADIO, FORM_DATA_WIDGET, YesNoUnknown } from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    id: 'exposureInvestigation',
    title: 'strings.headingExposureInvestigation',
    subTitle: 'strings.infoExposureInvestigation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: 'captions.EpiData.exposureDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exposures-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'activity',
    title: 'captions.EpiData.activitiesAsCase',
    subTitle: 'strings.infoActivityAsCaseInvestigation',
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
    subTitle: 'strings.infoEpiDataFieldsHint',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label: 'captions.EpiData.highTransmissionRiskArea',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label: 'captions.EpiData.largeOutbreaksArea',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'contacts',
    title: 'EpiData.contactWithSourceCase',
    subTitle: 'strings.infoEpiDataSourceCaseContacts',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: 'captions.EpiData.contactWithSourceCaseKnown',
        options: optionsYesNoUnknown,
      },
    ],
  },
];
